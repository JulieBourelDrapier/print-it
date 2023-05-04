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
function onButtonClick (event) {
	console.log(event.currentTarget)//pour savoir sur quel flèche on a cliqué
}

document.querySelector('button').forEach(button)
	button.addEventlistener('click', onButtonClick 
})
