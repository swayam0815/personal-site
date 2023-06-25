var prevScrollPos = window.scrollY;

var title = document.getElementById('title');
var about = document.getElementById('about');
var over = document.getElementById('overview');
var active;
window.onload = function() {
    // alert("Click on the text to scroll through the page rn, I'm too lazy to do finish the buttons, site also looks better on computer")
};


const divs = [];
const buttons = [];

window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var nav = document.getElementsByTagName("nav")[0];

    if (prevScrollPos < currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
};

var content = document.getElementById('content');
var child = content.querySelectorAll('div');
child[0].style.visibility = 'visible';
child[0].style.opacity = '1';
for (var i = 0; i < child.length; i++) {
    var prev, next;
    if (child[i].previousElementSibling != null) {
        prev = child[i].previousElementSibling;
    } else {
        prev = child[child.length - 1];
    }
    if (child[i].nextElementSibling != null) {
        next = child[i].nextElementSibling;
    } else {
        next = child[0];
    }
    const temp = {
        myself: child[i].id,
        prev: prev,
        next: next,
    };
    console.log(temp.i);

    divs.push(temp);

    // set opacity of all child divs to 0, if it is not the first child
    if (i != 0) {
        child[i].style.visibility = 'hidden';
    }

    child[i].addEventListener('click', function() {
        console.log(this);
        changeDiv(this);
    });
}


function changeDiv(div) {
    var clickedId = div.id;
    var me = divs.find(function(obj) {
        return obj.myself === clickedId;
    });
    if (me) {
        div.style.visibility = 'hidden';

        div.style.opacity = '0';
        me.next.style.visibility = 'visible';
        me.next.classList.toggle('slide');
        me.next.addEventListener('animationend', function() {
            me.next.classList.remove('slide');
        });
        me.next.style.opacity = '1';
    } else {
        console.log("Error");
        console.log(div.myself);
    }
}

// get element with id "btns" and store it in div
var parent = document.getElementById('btns');
var num = document.getElementsByClassName('center').length;

for (var i = 0; i < num; i++) {
    var temp = document.createElement('div');
    var inner = document.createElement('div');
    temp.id = i;
    temp.classList.add('btn');
    inner.classList.add('inner');
    if (i == 0) {
        temp.id = 'selected';
    }
    temp.appendChild(inner);
    parent.appendChild(temp);

    var tempobj = { j: temp };
    buttons.push(tempobj);
    temp.addEventListener('click', function(e) {
        var selected = document.getElementById('selected');
        selected.id = "1";
        this.id = 'selected';
    });
}