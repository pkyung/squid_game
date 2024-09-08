let contents = document.getElementById("contents");
let character = document.getElementById("characters");
let left = document.getElementById("left");
let right = document.getElementById("right");
var num = -1;

contents.addEventListener("click", contentSelect);
character.addEventListener("click", characterSelect);
right.addEventListener("click", changeImgRight);
left.addEventListener("click", changeImgLeft);


function contentSelect() {
    let img_parent = document.getElementById("char_parent");
    let content_parent = document.getElementById("content_parent");
    content_parent.style.display = "flex";
    img_parent.style.display = "none"
    num = 1;
}

function characterSelect() {
    if (num == 0) {
        return
    } else if (num == 1) {
        let img_parent = document.getElementById("char_parent");
        let content_parent = document.getElementById("content_parent");
        img_parent.style.display = "flex"
        content_parent.style.display = "none";
    } else if (num == -1) {
        var name = ["kihoon / leejungjae", "sangwoo / parkhaesoo", "ilnam / ohyoungsoo", "saebyeog / junghoyeon", "deoksu / heosungtae", "minyeo / kimjuryung", "alli / anuphamtripaty", "jiyoung / leeyumi", "ddakji / gongyoo"];
        let img_parent = document.getElementById("char_parent");
        let content_parent = document.getElementById("content_parent");
        let text = document.getElementById("text");
        let txt = document.createTextNode(name[0]);
        text.appendChild(txt);
        img_parent.style.display = "flex"
        content_parent.style.display = "none";
    }
    num++;
}

function changeImgRight() {
    var name = ["kihoon / leejungjae", "sangwoo / parkhaesoo", "ilnam / ohyoungsoo", "saebyeog / junghoyeon", "deoksu / heosungtae", "minyeo / kimjuryung", "alli / anuphamtripaty", "jiyoung / leeyumi", "ddakji / gongyoo"];
    if (num == 9) {
        return
    }
    num++;
    let img = document.getElementById("img");
    img.setAttribute("src", "../image/character"+num+".jpeg");
    let text = document.getElementById("text");
    text.childNodes[0].remove()
    let txt = document.createTextNode(name[num-1]);
    text.appendChild(txt);
    return
}

function changeImgLeft() {
    var name = ["kihoon / leejungjae", "sangwoo / parkhaesoo", "ilnam / ohyoungsoo", "saebyeog / junghoyeon", "deoksu / heosungtae", "minyeo / kimjuryung", "alli / anuphamtripaty", "jiyoung / leeyumi", "ddakji / gongyoo"];
    if (num == 1) {
        return
    }
    num--;
    let img = document.getElementById("img");
    img.setAttribute("src", "../image/character"+num+".jpeg");
    let text = document.getElementById("text");
    text.childNodes[0].remove();
    let txt = document.createTextNode(name[num-1]);
    text.appendChild(txt);
    return
}