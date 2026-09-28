const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@melbet_iran_official";

const cta = document.getElementById("youtubeCta");
const landing = document.querySelector(".landing");
const shell = document.querySelector(".page-shell");

if (cta) {
  cta.href = YOUTUBE_CHANNEL_URL;

  cta.addEventListener("click", () => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "youtube_channel_click",
        destination: YOUTUBE_CHANNEL_URL,
      });
    } catch (_) {
      // CTA navigation should never be blocked by analytics.
    }
  });
}

function fitLandingToViewport() {
  if (!landing || !shell) return;

  landing.style.transform = "scale(1)";

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  const sidePadding = viewportWidth <= 640 ? 6 : 14;
  const verticalPadding = viewportWidth <= 640 ? 6 : 10;

  const naturalWidth = landing.offsetWidth;
  const naturalHeight = landing.scrollHeight;

  const widthScale = (viewportWidth - sidePadding * 2) / naturalWidth;
  const heightScale = (viewportHeight - verticalPadding * 2) / naturalHeight;
  const scale = Math.min(1, widthScale, heightScale);

  landing.style.transformOrigin = "top center";
  landing.style.transform = `scale(${Math.max(scale, 0.5)})`;
  shell.style.height = `${viewportHeight}px`;
}

let resizeTimer;
function queueFit() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(fitLandingToViewport, 30);
}

window.addEventListener("load", fitLandingToViewport);
window.addEventListener("resize", queueFit);
window.addEventListener("orientationchange", queueFit);
window.visualViewport?.addEventListener("resize", queueFit);

document.fonts?.ready.then(fitLandingToViewport).catch(() => {});
