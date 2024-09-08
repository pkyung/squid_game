var gun_sound = new Audio("gun_sound.mp3");

class Person {
    constructor(el) {
        this.el = document.getElementById(el);
        this.movex = 0;
        this.speed = 2;
    }
    keyMotion() {
        if (key.keyDown['right']) {
            if (document.getElementById("yunghee").style.transform == "rotateY(0deg)") {
                if (document.getElementById("victory").innerText == "") {
                    document.getElementById("yunghee").remove();
                    document.getElementById("person").remove();
                    gun_sound.play();
                    document.getElementById("main").style.backgroundImage = 'url(../../image/content9.jpg)';
                    console.log('게임 오버');
                }
            } 
            if (this.movex == parseInt(gameProp.screenWidth * 0.7)) {
                console.log('게임 승리');
                document.getElementById("victory").innerText = "victory";
            }
            this.movex += this.speed;
        }
        this.el.parentNode.style.transform = `translateX(${this.movex}px)`
    }
    position() {
        return {
            left: this.el.getBoundingClientRect().left,
            right: this.el.getBoundingClientRect().right,
            top: gameProp.screenHeight-this.el.getBoundingClientRect().top,
            bottom: gameProp.screenHeight - this.el.getBoundingClientRect().top - this.el.getBoundingClientRect().height
        }
    }
    size() {
        return {
            width : this.el.offsetWidth,
            height: this.el.offsetHeight
        }
    }
}
