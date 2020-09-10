function toggleMenu() {
  var x = document.getElementById("topnav");
  if (x.className === "mex-navbar") {
    x.className += " responsive";
  } else {
    x.className = "mex-navbar";
  }
}


var btnScroll = document.getElementById("scrollTop");
var header = document.getElementById("header");
var sticky = header.offsetTop;

window.onscroll = function() {
    scrollFunction();
    stickyHeader();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
}

function stickyHeader(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var navContainer = document.getElementById("navMenu");
var navItem = navContainer.getElementsByClassName("mex-nav-item");
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("current");
  current[0].className = current[0].className.replace(" current", "");
  this.className += " current";
  });
}
