// Responsive menu
const mobileMenu = () => {
let meni = document.querySelector('.header ul');
let dugme = document.querySelector('.header button');

if (dugme.innerText==='MENU'){
meni.style.display ='block';
dugme.innerText ='CLOSE';

}else{
meni.style.display ='none';
dugme.innerText ='MENU';
}

}

// Image slider
let desnoDugme = document.querySelector('#right-btn');
let levoDugme = document.querySelector('#left-btn');
let slike = document.querySelectorAll('.slider-images img');
let imgNum= 0;

// Klik na desno dugme vrti slike unapred 
desnoDugme.addEventListener('click' , () =>{
	displayNone();
	imgNum++;

	if(imgNum ===slike.length){
		imgNum=0;
	}

slike[imgNum].style.display = 'block';
});

// Klik na levo dugme vraca slike unazad
levoDugme.addEventListener('click' , () =>{
displayNone();
imgNum--;


if(imgNum === -1){
	imgNum = slike.length -1;
}

slike[imgNum].style.display = 'block';

});

//Funkcija za sakrivanje slika
const displayNone= () =>{
	slike.forEach((img) => {
		img.style.display ='none';
	})
}

// Portfolio filter 
const portfolioSort =(button) => {
let kategorija = button.getAttribute('data-category');
let portfolioStavke = document.querySelectorAll('.portfolio-single-item');
portfolioStavke.forEach((stavka)=> {
stavka.style.display = 'none';

});

if(kategorija === 'sve'){
	portfolioStavke.forEach((stavka)=> {
stavka.style.display = 'block';

});

}


portfolioStavke.forEach((stavka) => {
if(stavka.getAttribute('data-category').includes(kategorija)){
	stavka.style.display= 'block';
}

});

}

// Otvaranje modala 
const openModal =()=>{
let modalProzor = document.querySelector('.popup-modal');
let overlay = document.querySelector('.overlay');
overlay.style.display ='block';
modalProzor.style.display='block';

}

// Zatvaranje modala
const closeModal=()=>{
let modalProzor = document.querySelector('.popup-modal');
let overlay = document.querySelector('.overlay');
overlay.style.display ='none';
modalProzor.style.display='none';


}