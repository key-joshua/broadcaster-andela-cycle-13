const ul = document.getElementById("ul");
const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("boxdown");
const trigger01 = document.getElementById("drown");
const trigger1 = document.querySelector('.pro');
const trigger2 = document.querySelector('.menu');


const dropdown2 = () =>{
	ul2.style.display = 'block';
}

const noDropdown2 = () =>{
	ul2.style.display = 'none';
}

const dropdown = () =>{
	if(ul.classList.contains('active')){
		noDropdown2();
	    ul.classList.remove('active');
	}else{
		dropdown2();
        ul.classList.add('active');
	}
}
const dropdown1 = () =>{
	if(ul1.classList.contains('active')){
	    ul1.classList.remove('active');
	}else{
        ul1.classList.add('active');
	}
}

trigger1.addEventListener('click',dropdown);
trigger2.addEventListener('click',dropdown);
trigger2.addEventListener('click',dropdown1);

function initMap() {

	let lats = parseInt(document.getElementById("latit").innerHTML);
	let longs = parseInt(document.getElementById("longit").innerHTML);


		let latitudo = lats;
		let longitudo = longs;
		
		let location = {lat: latitudo, lng: longitudo};

		let map = new google.maps.Map(document.getElementById("map"), {
			center:location,
			zoom: 2.5
		});

		let marker = new google.maps.Marker({
			position: location,
			map: map
		});
		
}



let namoso = document.getElementById("nama");
let comntoso = document.getElementById("comnty");
let postoso = document.getElementById("post");

let usernamoso = document.getElementById("Usernamo");
let nextCmntoso = document.getElementById("nextCmnto");
let contentoso = document.getElementById("contento");

let countsoso = document.getElementById("counts");

const leaveCommnets = () =>{
	contentoso.style.display = 'block';
	countsoso.innerHTML = "04";
	usernamoso.innerHTML = namoso.value;
	nextCmntoso.innerHTML = comntoso.value;
	
}
postoso.addEventListener('click', leaveCommnets);
