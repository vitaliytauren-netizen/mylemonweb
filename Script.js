const tg = window.Telegram.WebApp;
tg.expand();

const LINK = "https://t.me/myLemonWorldBot/myapp?startapp=835382003";

function go() {
  tg.openTelegramLink(LINK);
}
