
const alla = document.getElementById("all");
const drafta = document.getElementById("draft");
const deala = document.getElementById("deal");
const resolva = document.getElementById("resolva");
const rejecta = document.getElementById("rejecta");

const btnalla = document.getElementById("alls");
const btndrafta = document.getElementById("acs");
const btndeala = document.getElementById("ins");
const btnresolva = document.getElementById("crs");
const bntrejecta = document.getElementById("dls");

const showAll = () =>{
	alla.style.display = 'block';
	drafta.style.display = 'none';
	deala.style.display = 'none';
	resolva.style.display = 'none';
	rejecta.style.display = 'none';
}

const showDraft = () =>{
	alla.style.display = 'none';
	drafta.style.display = 'block';
	deala.style.display = 'none';
	resolva.style.display = 'none';
	rejecta.style.display = 'none';
}


const showDeal = () =>{
	alla.style.display = 'none';
	drafta.style.display = 'none';
	deala.style.display = 'block';
	resolva.style.display = 'none';
	rejecta.style.display = 'none';
}


const showResolv = () =>{
	alla.style.display = 'none';
	drafta.style.display = 'none';
	deala.style.display = 'none';
	resolva.style.display = 'block';
	rejecta.style.display = 'none';
}


const showReject = () =>{
	alla.style.display = 'none';
	drafta.style.display = 'none';
	deala.style.display = 'none';
	resolva.style.display = 'none';
	rejecta.style.display = 'block';
}


btnalla.addEventListener('click',showAll);
btndrafta.addEventListener('click',showDraft);
btndeala.addEventListener('click',showDeal);
btnresolva.addEventListener('click',showResolv);
bntrejecta.addEventListener('click',showReject);


const trigger1 = document.querySelector('.pro');
const trigger2 = document.querySelector('.menu');


const dropdown = () =>{
	if(ul.classList.contains('active')){
	    ul.classList.remove('active');
	}else{
        ul.classList.add('active');
	}
}
trigger1.addEventListener('click',dropdown);

const dropdown1 = () =>{
	if(ul1.classList.contains('active')){
	    ul1.classList.remove('active');
	}else{
        ul1.classList.add('active');
	}
}
trigger2.addEventListener('click',dropdown);
trigger2.addEventListener('click',dropdown1);
