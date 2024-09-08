const key = {
    keyDown : {},
    keyValue : {
        ArrowLeft: 'left',
        ArrowRight: 'right'
    }
}

const gameProp = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
}

const rederGame = () => {
    window.requestAnimationFrame(rederGame);
    person.keyMotion();
}

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
    });
}

let person;

const init = () => {
    person = new Person('person');
    windowEvent();
    rederGame();
}

window.onload = () => {
    init();
}