var prevScrollPos = window.pageYOffset;

var title = document.getElementById('title');
var about = document.getElementById('about');
var over = document.getElementById('overview');
// over.style.transform = 'translateY(-100vh)';



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

var content = document.getElementById('content');
var child = content.querySelectorAll('div');
child[0].style.visibility = 'visible';
child[0].style.opacity = '1';
for (var i = 0; i < child.length; i++) {
    console.log(child[i]);
    // set opacity of all child divs to 0, if it is not the first child
    if (i != 0) {
        child[i].style.visibility = 'hidden';
    }

    child[i].addEventListener('click', function(e) {
        this.style.visibility = 'hidden';
        this.classList.toggle('slide-down');
        this.style.opacity = '0';
        this.nextElementSibling.style.visibility = 'visible';
        this.nextElementSibling.classList.toggle('slide');
        this.nextElementSibling.style.opacity = '1';
        console.log("Hid " + this.id);
        console.log("Showed " + this.nextElementSibling.id);

    });
}

// title.addEventListener('click', function() {
//     title.style.transform = 'translateY(-100vh)';
//     setTimeout(function() {
//         title.style.visibility = 'hidden';
//         title.style.transform = 'translateY(100vh)';
//         about.style.transform = 'translateY(-100vh)';

//     }, 500);

// })

// about.addEventListener('click', function() {
//     about.style.transform = 'translateY(-100vh)';
//     setTimeout(function() {
//         about.style.visibility = 'hidden';
//         about.style.transform = 'translateY(100vh)';
//         over.style.transform = 'translateY(-100vh)';

//     }, 1000);

// })