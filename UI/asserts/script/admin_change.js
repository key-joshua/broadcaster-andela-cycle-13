let comnt = document.getElementById("comnt_stuff");
let editForm = document.getElementById("status_stuff");
let editBtn = document.getElementById("edit");
let comntBtn = document.getElementById("comnt");

const showeditForm = () =>{
	comnt.style.display = 'none';
	editForm.style.display = 'block';
}
editBtn.addEventListener('click', showeditForm);



const showcomntForm = () =>{
	comnt.style.display = 'block';
	editForm.style.display = 'none';
}
comntBtn.addEventListener('click', showcomntForm);


let namos = document.getElementById("nama");
let comntos = document.getElementById("comnty");
let postos = document.getElementById("post");

let usernamos = document.getElementById("Usernamo");
let nextCmntos = document.getElementById("nextCmnto");
let contentos = document.getElementById("contento");

let countso = document.getElementById("counts");

const leaveCommnet = () =>{
	contentos.style.display = 'block';
	countso.innerHTML = "04";
	usernamos.innerHTML = namos.value;
	nextCmntos.innerHTML = comntos.value;
	
}
postos.addEventListener('click', leaveCommnet);

let btn_0 = document.getElementById("edit");
let btn_1 = document.getElementById("update");
let btn_00 = document.getElementById("comnt");
let forms =document.getElementById("created");
let forms0 =document.getElementById("createc");
let btn_a = document.getElementById("unders");
let btn_b =document.getElementById("resolvs");
let btn_c =document.getElementById("rejects");

let op_a = "under_investigation";
let op_b = "resolved";
let op_c = "rejected";
const shows = (unders,resolvs,rejects,element) =>
{
	btn_a.style.display = element.value === op_a ? 'block' : 'none' ;
    btn_b.style.display = element.value === op_b ? 'block' : 'none' ;
    btn_c.style.display = element.value === op_c ? 'block' : 'none' ;
};

const showForm = () =>{
	forms.style.display = 'block';
	btn_1.style.display ='block';
}
btn_0.addEventListener('click', showForm);

let show = () =>
{
	formso.style.display = 'block';
}
btn_00.addEventListener('click', show);




const dates = document.getElementById("dates");
const currentDates = new Date().toString();
dates.value = currentDates;



const ul = document.getElementById("ul");
const ul1 = document.getElementById("ul1");
const trigger1 = document.querySelector('.pro');
const trigger2 = document.querySelector('.menu');

const dropdown = () =>{
	if(ul.classList.contains('active')){
	    ul.classList.remove('active');
	}else{
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


let nomelo = document.getElementById("nome");
let typos = document.getElementById("types");
let statuseose = document.getElementById("statuseos");


let datos = document.getElementById("changeDate");
let phonos = document.getElementById("phone");
let emailos = document.getElementById("email");
let subj = document.getElementById("subjects");
let messag = document.getElementById("messages");
let orderos = document.getElementById("order");

datos.value = new Date().toString();
phonos.value = "+250789619442";
emailos.value = "k.joshua800@gmail.com";
subj.value = `Status Changed To ${orderos.value}`;
messag.value = `Hey ${nomelo.innerHTML} Your ${typos.innerHTML} record was changed To ${orderos.value}`;

const sendEmail = () =>{

  statuseose.innerHTML = orderos.value;
  subj.value = `Status Changed To ${orderos.value}`;
  messag.value = `Hey ${nomelo.innerHTML} Your ${typos.innerHTML} record was changed To ${orderos.value}`;

  Email.send({
    SecureToken : "1cf62e37-e2f4-47de-9137-c3aff4bfe974",
    To : emailos.value ,
    From : "k.joshua855@gmail.com",
    Subject : subj.value,
    Body : messag.value
  }).then(
  message => alert("Email sent Successfully")
  );
}
let undersos = document.getElementById("unders");
let resolvsos = document.getElementById("resolvs");
let rejectsos = document.getElementById("rejects");
undersos.addEventListener('click', sendEmail);
resolvsos.addEventListener('click', sendEmail);
rejectsos.addEventListener('click', sendEmail);

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