const ul = document.getElementById("ul");
const trigger = document.querySelector('.menu');

const dropdown = () =>{
	if(ul.classList.contains('active')){
	    ul.classList.remove('active');
	}else{
        ul.classList.add('active');
	}
}
trigger.addEventListener('click',dropdown);