let count = 456;
class Change {
    constructor(el) {
        this.el = document.getElementById(el);
    }
    keyMotion() {
        if (key.keyDown['space']) {
            count--;
            if (count < 0) {
                
            } else {
                document.getElementById("change").innerText = count;
            }
        }
    }
}