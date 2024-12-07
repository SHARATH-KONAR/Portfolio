// Welcome screen timeout
window.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome");

  // Make the welcome screen last 8 seconds
  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 8000); // Set to 8 seconds for animation duration
});
