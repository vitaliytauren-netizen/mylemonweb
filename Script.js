const tg = window.Telegram.WebApp;
tg.expand();

const LINK = "https://t.me/myLemonWorldBot/myapp?startapp=835382003";

// ===== FOMO TIMER =====
let endTime = localStorage.getItem("endTime");
if (!endTime) {
  endTime = Date.now() + 5 * 60 * 1000; // 5 минут
  localStorage.setItem("endTime", endTime);
}

function updateTimer() {
  const now = Date.now();
  const diff = endTime - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "00:00";
    return;
  }

  const min = Math.floor(diff / 60000);
  const sec = Math.floor((diff % 60000) / 1000);
  document.getElementById("timer").innerText =
    String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();

// ===== ONLINE COUNTER =====
const online = document.getElementById("online");
setInterval(() => {
  let value = parseInt(online.innerText);
  value += Math.floor(Math.random() * 3) - 1;
  if (value < 50) value = 50;
  if (value > 150) value = 150;
  online.innerText = value;
}, 3000);

// ===== BUTTON ACTION =====
function go() {
  tg.openTelegramLink(LINK);
}

