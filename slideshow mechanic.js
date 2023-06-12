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

var divs = document.getElementsByClassName('content');
var j = 0;
var container = document.querySelector('.container');
var divOriginalStyles = [];

// Store the original styles of each div
for (var i = 0; i < divs.length; i++) {
    divOriginalStyles[i] = Object.assign({}, window.getComputedStyle(divs[i]));
    if (i != 0) {
        divs[i].style.width = "0px";
        divs[i].style.height = "0px";
        divs[i].style.padding = "0px";
    }
}


container.addEventListener('click', changeDiv);
container.addEventListener('wheel', changeDiv);


function changeDiv() {
    divs[j].classList.remove('active');
    divs[j].style.width = "0px";
    divs[j].style.height = "0px";
    divs[j].style.padding = "0px";

    j = (j + 1) % divs.length;

    setTimeout(function() {
        divs[j].classList.add('active');
        divs[j].style.width = divOriginalStyles[j].width;
        console.log(divs[j].style.width + " and original width is " + divOriginalStyles[j].width);
        divs[j].style.height = divOriginalStyles[j].height;
        divs[j].style.padding = divOriginalStyles[j].padding;
    }, 10);
}