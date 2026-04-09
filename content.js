// content.js
document.addEventListener("visibilitychange", async () => {
  // Check user settings first
  const result = await chrome.storage.sync.get(['autoPauseEnabled']);
  const isEnabled = result.autoPauseEnabled !== false; // true by default
  
  if (!isEnabled) {
    return; // Extension is toggled off
  }

  const video = document.querySelector("video");
  
  if (video) {
    if (document.visibilityState === "hidden") {
      video.pause();
    } else if (document.visibilityState === "visible") {
      // Small pause before playing to ensure the DOM is ready and prevent potential auto-play policy issues
      setTimeout(() => {
        video.play().catch(e => console.error("Auto-pause extension: Error playing video", e));
      }, 100);
    }
  }
});
