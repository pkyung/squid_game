document.getElementById("start").addEventListener("click", start);
document.getElementById("game1").addEventListener("click", game1);
document.getElementById("game2").addEventListener("click", game2);
document.getElementById("game3").addEventListener("click", game3);

function start() {
    document.getElementById("main").style.display = "none";
    document.getElementById("game").style.display = "flex";
}

function game1() {
    document.getElementById("game").style.display = "none";
    document.getElementById("game1-game").style.display = "block";
    document.getElementById("game1-game").style.backgroundImage = "url('../../image/dalgona_circle.png')";
}

function game2() {
    document.getElementById("game").style.display = "none";
    document.getElementById("game1-game").style.display = "block";
    document.getElementById("game1-game").style.backgroundImage = "url('../../image/dalgona_tri.png')";
}

function game3() {
    document.getElementById("game").style.display = "none";
    document.getElementById("game1-game").style.display = "block";
    document.getElementById("game1-game").style.backgroundImage = "url('../../image/dalgona_umb.png')";
}