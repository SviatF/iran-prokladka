const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@melbet_iran_official";

const cta = document.getElementById("youtubeCta");

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
