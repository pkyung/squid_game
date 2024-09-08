document.getElementById("start").addEventListener("click", start);

var gun_sound = new Audio("gun_sound.mp3");

function start() {
    document.getElementById("main").style.display = "none";
    document.getElementById("jul").style.display = "block";
    document.getElementById("change").innerText = 456;
    document.getElementById("sec").innerText = '10sec';
    var time = 10;
    var x = setInterval(function() {
        document.getElementById("sec").innerText = time + 'sec';
        time--;
        if (time < 0) {
            clearInterval(x);
            console.log(document.getElementById("change").innerText);
            if (document.getElementById("change").innerText > 0) {
                gun_sound.play();
                document.getElementById("jul").style.backgroundImage = "url('../../image/content9.jpg')";
            } else {
                document.getElementById("victory").innerText = "victory";
            }
        }
    }, 1000);
}


