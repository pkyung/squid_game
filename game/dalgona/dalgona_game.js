const key = {
    keyDown : {},
    keyValue : {
        ArrowLeft: 'left',
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down"
    }
}

const gameProp = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    divWidth: window.innerWidth * 0.7 
}

// renderGame 함수를 만듦으로써 연속되게 키를 눌러도 딜레이 없도록
const renderGame = () => {
    window.requestAnimationFrame(renderGame);
    needle.keyMotion();
}

//윈도우 이벤트 관리
const windowEvent = () => {
    window.addEventListener("keydown", e => {
        key.keyDown[key.keyValue[e.key]] = true;
    });
    window.addEventListener("keyup", e => {
        key.keyDown[key.keyValue[e.key]] = false;
    });
    window.addEventListener("resize", e => {
        gameProp.screenWidth = window.innerWidth;
        gameProp.screenHeight = window.innerHeight;
        gameProp.divWidth = window.innerWidth * 0.7 
    });
}

let needle;

const init = () => {
    needle = new Needle('needle');
    windowEvent();
    renderGame();
}

window.onload = () => {
    init();
}