// Carrousel 
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// annonce des variables
let slideIndex   = 0; // permet de savoir sur quelle slide je me trouve
const imgPath    = './assets/images/slideshow/';
const banner     = document.querySelector('.banner-img');
const tagLine    = document.querySelector('.tag-line');
const dots       = document.getElementsByClassName('dot');
const leftArrow  = document.querySelector('.arrow_left');//pr la récup
const rightArrow = document.querySelector('.arrow_right');//pr la récup

// annonce des fonctions 
function goNextSlide () {
	dots[slideIndex].classList.remove('dot_selected')
	if (slideIndex < slides.length -1) {
		slideIndex++;
	} 
	else {
		slideIndex = 0
	}
	dots[slideIndex].classList.add('dot_selected')
	banner.setAttribute('src', imgPath + slides[slideIndex].image);
	tagLine.innerHTML = slides[slideIndex].tagLine;
}

function goPreviousSlide () {
	dots[slideIndex].classList.remove('dot_selected')
	if (slideIndex > 0) {
		slideIndex--;
	}
	else {
		slideIndex = slides.length -1
	}
	dots[slideIndex].classList.add('dot_selected')
	banner.setAttribute('src', imgPath + slides[slideIndex].image);
	tagLine.innerHTML = slides[slideIndex].tagLine;
}

// ajout des EventListener 
leftArrow.addEventListener('click', goPreviousSlide);
rightArrow.addEventListener('click', goNextSlide);

