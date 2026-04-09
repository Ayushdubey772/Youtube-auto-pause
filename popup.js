document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleSwitch");

  // Load saved state
  chrome.storage.sync.get("autoPauseEnabled").then((data) => {
    // Default to true if not set
    toggle.checked = data.autoPauseEnabled !== false;
  });

  // Save state on change
  toggle.addEventListener("change", () => {
    const isEnabled = toggle.checked;
    chrome.storage.sync.set({ autoPauseEnabled: isEnabled });
  });
});
