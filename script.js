var descc = document.getElementById('desc');


window.addEventListener('load', function() {
    var titleElement = document.getElementById('title');
    //descc.style.display = 'none';
    titleElement.classList.add('play-animation');
});


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


var title = document.getElementById("title-box");
title.addEventListener('click', function() {

    title.style.animation = "slide-out 1s forwards";
    descc.style.display = 'flex';

    descc.style.animation = "slide-up 1s forwards";

    title.style.animation = "slide-down 1s forwards";

})


descc.addEventListener('click', function() {
    title.style.visibility = "visible";

    title.style.animation = "slide-up 1s forwards";

})