window.addEventListener('load', function() {
    var titleElement = document.getElementById('title');
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