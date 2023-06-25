var prevScrollPos = window.scrollY;

var title = document.getElementById('title');
var about = document.getElementById('about');
var over = document.getElementById('overview');


const divs = [];

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
        next: next
    };

    divs.push(temp);

    // set opacity of all child divs to 0, if it is not the first child
    if (i != 0) {
        child[i].style.visibility = 'hidden';
    }

    child[i].addEventListener('click', function(e) {
        var clickedId = this.id;
        var me = divs.find(function(obj) {
            return obj.myself === clickedId;
        });
        if (me) {
            this.style.visibility = 'hidden';
            this.style.opacity = '0';
            me.next.style.visibility = 'visible';
            me.next.classList.toggle('slide');
            me.next.addEventListener('animationend', function() {
                me.next.classList.remove('slide');
            });
            me.next.style.opacity = '1';
            console.log("Hid " + this.id);
            console.log("Showed " + me.next.id);

        }
    });
}


// get element with id "btns" and store it in div
var parent = document.getElementById('btns');
var num = document.getElementsByClassName('center').length;

for (var i = 0; i < num; i++) {
    var temp = document.createElement('div');
    var inner = document.createElement('div');
    temp.classList.add('btn');
    inner.classList.add('inner');
    if (i == 0) {
        temp.classList.add('selected');
        inner.classList.add('selected');
    }
    temp.appendChild(inner);
    parent.appendChild(temp);
}