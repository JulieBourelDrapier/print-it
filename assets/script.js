//CARROUSEL 
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
let slideIndex = 0; // permet de savoir sur quelle slide je me trouve

const imgPath = './assets/images/slideshow/';

const banner = document.querySelector('.banner-img');

const tagLine = document.querySelector('.tag-line');

const dots = document.getElementsByClassName('dot');

//pour faire défiler le carrousel j'utiliserai les fonctions nextSLide et previousSlide
function nextSlide () {
	dots[slideIndex].classList.remove('dot_selected')
	if (slideIndex < slides.length -1) {
		slideIndex++;
	} 
	else {
		slideIndex = 0
	}
	dots[slideIndex].classList.add('dot_selected')
	console.log("1 => ", typeof slideIndex, slideIndex);
	banner.setAttribute('src', imgPath + slides[slideIndex].image);
	tagLine.innerHTML = slides[slideIndex].tagLine;
}

function previousSlide () {
	dots[slideIndex].classList.remove('dot_selected')
	if (slideIndex > 0) {
		slideIndex--;
	}
	else {
		slideIndex = slides.length -1
	}
	dots[slideIndex].classList.add('dot_selected')
	console.log("2 => ", typeof slideIndex, slideIndex);
	banner.setAttribute('src', imgPath + slides[slideIndex].image);
	tagLine.innerHTML = slides[slideIndex].tagLine;
}


// ajout des EventListener sur les flèches 
let leftArrow = document.querySelector('.arrow_left');//pr la récup
leftArrow.addEventListener('click', previousSlide);// clic
let rightArrow = document.querySelector('.arrow_right');//pr la récup
rightArrow.addEventListener('click', nextSlide);// clic



// raccourci commentaire sur une ligne = "Ctrl + /"