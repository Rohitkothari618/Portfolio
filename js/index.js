const hamburger = document.getElementById("hamburger");
const hamMenu = document.getElementById("open-hamburger");
const hamlogo = document.getElementById("hamburger-menu");
const closeBtn = document.getElementById("close-btn");
console.log(hamMenu);
console.log(hamburger);
hamburger.addEventListener("click", () => {
  console.log("you click me !");
  hamMenu.classList.add("open");
  hamlogo.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  hamMenu.classList.remove("open");
  hamlogo.classList.remove("open");
});
var prev = document.getElementById("prev");
var next = document.getElementById("next");
const slides = document.getElementById("slider");
const slideLen = document.querySelectorAll(".slide");
console.log(slideLen);
var i = 0;
slides.addEventListener("drag", () => {
  slides.scrollLeft += 50;
});
next.addEventListener("click", () => {
  console.log("hellworold");
  slides.scrollLeft += 200;
});
prev.addEventListener("click", () => {
  console.log("hellworold");
  slides.scrollLeft -= 200;
});
