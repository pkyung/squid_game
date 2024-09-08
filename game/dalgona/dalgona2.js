document.getElementById("start").addEventListener("click", start);
document.getElementById("game1").addEventListener("click", game1);
document.getElementById("game2").addEventListener("click", game2);
document.getElementById("game3").addEventListener("click", game3);
document.getElementById("myCanvas").addEventListener("click", canvasClick);

function start() {
    document.getElementById("main").style.display = "none";
    document.getElementById("game").style.display = "flex";
}

function game1() {
    document.getElementById("game").style.display = "none";
    document.getElementById("game1-game").style.display = "block";
    document.getElementById("game1-game").style.backgroundImage = "url('../../image/dalgona_1.png')";
}

function game2() {
    document.getElementById("game").style.display = "none";
    document.getElementById("game1-game").style.display = "block";
    document.getElementById("game1-game").style.backgroundImage = "url('../../image/dalgona_2.png')";
}

function game3() {
    document.getElementById("game").style.display = "none";
    document.getElementById("game1-game").style.display = "block";
    document.getElementById("game1-game").style.backgroundImage = "url('../../image/dalgona_3.png')";
}

function canvasClick(event) {
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");

    x = (event.clientX - myCanvas.offsetLeft) / 4.5;
    y = (event.clientY - myCanvas.offsetTop) / 5;
    console.log(x, y);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2*Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
}
