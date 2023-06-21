var descc = document.getElementById('desc');
var title = document.getElementById('title-box');
var about = document.getElementById('about');

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var nav = document.getElementsByTagName("nav")[0];

    if (prevScrollPos < currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
};

about.style.visibility = "hidden";
descc.style.visibility = "hidden";

about.style.animation = "slide-out 1s forwards";
descc.style.animation = "slide-out2 1s forwards";
console.log(document.getElementById("index").childElementCount);
// about.addEventListener('animationend', function() {
//     about.style.opacity = "0";
// })