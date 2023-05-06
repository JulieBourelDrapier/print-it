//Création du carrousel 
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

// annonce des variables à appeler pour le carrousel
let slideBySlide = 0; // permet de savoir sur quelle slide je me trouve

const imgPath = './assets/images/slideshow/';

const banner = document.querySelector('.banner-img');

const tagLine = document.querySelector('.tag-line');

// annonce des variables à appeler pour les bullet points

//pour faire défiler le carrousel j'utiliserai les fonctions nextSLide et previousSlide
function nextSlide () {
	if (slideBySlide < slides.length -1) {
		slideBySlide++;
	} 
	else {
		slideBySlide = 0
	}
	console.log(slideBySlide)
	banner.setAttribute('src', imgPath + slides[slideBySlide].image);
	tagLine.innerHTML = slides[slideBySlide].tagLine;
}

function previousSlide () {
	if (slideBySlide > 0) {
		slideBySlide--;
	}
	else {
		slideBySlide = slides.length -1
	}
	console.log(slideBySlide)
	banner.setAttribute('src', imgPath + slides[slideBySlide].image);
	tagLine.innerHTML = slides[slideBySlide].tagLine;
}


// ajout des EventListener sur les flèches 
let leftArrow = document.querySelector('.arrow_left');//pr la récup
leftArrow.addEventListener('click', previousSlide);// clic
let rightArrow = document.querySelector('.arrow_right');//pr la récup
rightArrow.addEventListener('click', nextSlide);// clic


// raccourci commentaire sur une ligne = Ctrl + /


