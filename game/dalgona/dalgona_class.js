class Needle {
    constructor(el) {
        this.el = document.getElementById(el);
        this.movex = 0;
        this.movey = 0;
        this.speed = 2;
    }
    keyMotion() {
        if (key.keyDown['left']) {
            if (this.movex >= 0) {
                this.movex -= this.speed;
            }
        } else if (key.keyDown['right']) {
            if (this.movex <= gameProp.divWidth) {
                this.movex += this.speed;
            }
        } else if (key.keyDown['up']) {
            this.movey -= this.speed;
        } else if (key.keyDown['down']) {
            this.movey += this.speed;
        }
        this.el.parentNode.style.transform = `translate(${this.movex}px, ${this.movey}px)`;
    }
    position() {
        return {
            left: this.el.getBoundingClientRect().left,
            right: this.el.getBoundingClientRect().right,
            top: gameProp.screenHeight-this.el.getBoundingClientRect().top,
            bottom: gameProp.screenHeight - this.el.getBoundingClientRect().top - this.el.getBoundingClientRect().height
        }
    }
}
