var yunghee = document.getElementById("yunghee");


changeDirection = setInterval(function() {
    console.log(yunghee);
   yunghee.style.transform = "rotateY(0deg)";
   setTimeout(function() {
    yunghee.style.transform = "rotateY(180deg)";
   }, 3000)
}, 6000);
