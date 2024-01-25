const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
    slide.classList.add("flash")
  });
}

updateSlider();

let all = document.querySelector(".all");
let list = document.querySelector(".list");
let l = document.querySelector(".l");
let button = document.querySelector(".form__button");
let but = document.querySelector(".but");

function show() {
	l.style.display = "block";
	button.disabled=true;
	let del = document.querySelectorAll(".cross");
}
button.addEventListener("click" , show);

cr = document.querySelector(".cross");
function close_b(){
	l.style.display = "none";	
	button.disabled=false;
}