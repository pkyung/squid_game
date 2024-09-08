const key = {
    keyDown : {},
    keyValue : {
        " " : "space"
    }
}

const gameProp = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
}

const renderGame = () => {
    window.requestAnimationFrame(renderGame);
    change.keyMotion();
}

const windowEvent = () => {
    // 키보드 이벤트 추가
    window.addEventListener("keydown", e => {
        key.keyDown[key.keyValue[e.key]] = true;
    });
    window.addEventListener("keyup", e => {
        key.keyDown[key.keyValue[e.key]] = false;
    });
    window.addEventListener("resize", e => {
        gameProp.screenWidth = window.innerWidth;
        gameProp.screenHeight = window.innerHeight;
    });
}

let change;

const init = () => {
    change = new Change("jul");
    windowEvent();
    renderGame();
}

window.onload = () => {
    init();
}