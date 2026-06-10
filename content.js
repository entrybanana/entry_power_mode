const CUSTOM_FONTS = [
  "Pretendard",
  "BM JUA",
  "BM DOHYEON",
  "CookieRun"
];

function injectFonts() {
  const style = document.createElement("style");

  style.textContent = `
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  `;

  document.head.appendChild(style);
}

injectFonts();

console.log("엔트리 파워모드 로드");
