// annonce variable
let slideBySlide = 0; // permer de savoir sur quelle slide je me trouve

//pour faire défiler le carrousel j'utiliserai la fonction suivante
function nextSlide (){
}

//DOM
window.onload = () => {
	const banner = document.querySelector('.banner');
	//partie présente dans le JS 
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
	// ajout des EventListener sur les flèches 
	let leftArrow = document.querySelector('.arrow_left');//pr la récup
	leftArrow.addEventListener('click', nextSlide)// clic
}

// raccourci commentaire sur une ligne = Ctrl + /


