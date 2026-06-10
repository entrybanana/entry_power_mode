// 엔트리 파워모드 v0.1

console.log("엔트리 파워모드 실행");

// 폰트 로드
const style = document.createElement("style");

style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.epm-menu {
    position: fixed;
    top: 120px;
    right: 20px;
    z-index: 999999;
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
}

.epm-btn {
    display: block;
    width: 100%;
    margin: 4px 0;
    padding: 8px;
    cursor: pointer;
}

.epm-jua {
    font-family: 'Jua', sans-serif !important;
}
`;

document.head.appendChild(style);

function applyFont(fontName) {

    const input = document.querySelector("#inpt");

    if (!input) {
        alert("글상자를 먼저 열어주세요.");
        return;
    }

    input.style.fontFamily = fontName;

    const label = document.querySelector(
        ".input_inner__b0kgT label"
    );

    if (label) {
        label.style.fontFamily = fontName;
    }

    console.log("폰트 적용:", fontName);
}

function createMenu() {

    if (document.querySelector("#epm-menu"))
        return;

    const menu = document.createElement("div");

    menu.id = "epm-menu";
    menu.className = "epm-menu";

    menu.innerHTML = `
        <b>엔트리 파워모드</b><br><br>

        <button class="epm-btn" id="font-jua">
            배민 주아체
        </button>

        <button class="epm-btn" id="font-pretendard">
            Pretendard
        </button>

        <button class="epm-btn" id="font-default">
            기본 폰트
        </button>
    `;

    document.body.appendChild(menu);

    document
        .querySelector("#font-jua")
        .onclick = () => applyFont("Jua");

    document
        .querySelector("#font-pretendard")
        .onclick = () =>
            applyFont("Pretendard");

    document
        .querySelector("#font-default")
        .onclick = () =>
            applyFont("NanumSquareRound");
}

setInterval(() => {

    const input =
        document.querySelector("#inpt");

    if (input) {
        createMenu();
    }

}, 1000);
