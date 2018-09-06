document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.getElementById('hamburger');
var menu = document.getElementById("menu");
hamburger.addEventListener("click", function onClick(event) {
    hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle("center-menu");
    
  });
})
