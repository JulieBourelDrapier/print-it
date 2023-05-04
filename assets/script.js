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
//function onButtonClick (event) {
	//console.log(event.currentTarget)//pour savoir sur quel flèche on a cliqué
//}
//document.querySelectorAll('button').forEach(button => {
	//button.addEventlistener('click',onButtonClick) 
//})

//autre essai flèche par flèche 
//left arrow click
let sliderImages =
document.querySelectorAll('banner'),
	arrowLeft = document.querySelector('.arrow_left'),
	arrowRight = document.querySelector('.arrow_right'),
	current = 0;

//clear all images
function reset(){
	for(let i = 0; i < sliderImages.length; i ++){
		sliderImages[i].style.display = 'none';
	}
}
//initialise slider 
function startSlide(){
	reset();
	sliderImages[0].style.display = 'block';
}

//show previous
function slideleft(){
	reset();
	sliderImages[current -1].style.display = 'block';
}

//show next 
function slideRight(){
	reset();
	sliderImages[current + 1].style.display = 'block';
	current ++;
}

//left arrow click
arrowLeft.addEventlistener('click', function(){ 
	if (current === 0){
		current = sliderImages.lengh;
	}
	slideLeft();
});

//right arrow click
arrowRight.addEventlistener('click', function(){ 
	if (current === sliderImages.lenght -1){
		current = -1;
	}
	slideRight();
});

startSlide();

