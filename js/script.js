var nav = document.getElementById('nav');
var hamburger = document.getElementById('hamburger');

function toggleNav(){ // runs when you click on menu button
	nav.classList.toggle('open');
	hamburger.classList.toggle('active');

}

var personAmount = 0;
function bookPersonAmount(value){ // runs when user chose how many persons will come
	personAmount = value;
	document.getElementById('chosenPersonAmount').innerHTML = personAmount;
}





