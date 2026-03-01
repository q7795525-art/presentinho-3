// Gift box opening animation
function openGift() {
  const giftBox = document.querySelector(".gift-box");
  const messageContainer = document.getElementById("message-container");
  const clickHint = document.querySelector(".click-hint");

  // Hide click hint
  if (clickHint) {
    clickHint.style.transition = "opacity 0.3s ease";
    clickHint.style.opacity = "0";
  }

  // Animate gift box
  giftBox.style.transition = "all 0.5s ease";
  giftBox.style.transform = "scale(1.2) rotate(5deg)";
  giftBox.style.opacity = "0";

  // Hide gift box after animation
  setTimeout(() => {
    giftBox.classList.add("hidden");
  }, 500);

  // Show message with delay
  setTimeout(() => {
    messageContainer.classList.add("show");
  }, 600);
}

// Timer - counting from January 2, 2025
function updateTimer() {
  const startDate = new Date("January 2, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("timer-value");
  if (timerElement) {
    timerElement.textContent = `${days} dias, ${hours}h ${minutes}min ${seconds}s`;
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  updateTimer();
  setInterval(updateTimer, 1000);
});
