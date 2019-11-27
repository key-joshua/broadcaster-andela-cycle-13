const ul = document.getElementById("ul");
const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("boxdown");
const trigger01 = document.getElementById("drown");
const trigger1 = document.querySelector('.pro');
const trigger2 = document.querySelector('.menu');

let btn_1 = document.getElementById("redflags");
let btn_2 =document.getElementById("intervetions");

let op_1 = "redflag";
let op_2 = "intervetion";
let show = (redflags,intervetions,element) =>
{
	btn_1.style.display = element.value === op_1 ? 'block' : 'none' ;
    btn_2.style.display = element.value === op_2 ? 'block' : 'none' ;
}




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

