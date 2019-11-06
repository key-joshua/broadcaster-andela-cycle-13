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


let turnsignupos = document.getElementById("turnsignup");
let turnlog = document.getElementById("turnlogin");
let signinos = document.getElementById("signino");
let signupos = document.getElementById("signupo");

let fnames = document.getElementById("fname");
let lnames = document.getElementById("lname");
let unames = document.getElementById("uname");
let phones = document.getElementById("phone");
let emails = document.getElementById("email");
let passwords = document.getElementById("password");
let emails1 = document.getElementById("email1");
let passwords1 = document.getElementById("password1");
let cpasswords = document.getElementById("cpassword");
let results = document.getElementById("result");
let results1 = document.getElementById("result1");
let loginBtns = document.getElementById("loginBtn");
let signupBtns = document.getElementById("signupBtn");


var usersDB =
[

{ id:1, name: "key joshua",  Email: "k.joshua855@gmail.com",  Password: "qwerty"},

{ id:2, name: "sabas nayo", Email: "sabas@gmail.com",  Password: "qwerty07202020"}

];


const logins = () =>
{

let inputEmail = emails.value.toString().trim().toLowerCase();
let inputPassword = passwords.value.toString().trim().toLowerCase();

const check = usersDB.some((el) => el.Email === inputEmail && el.Password === inputPassword );

if (inputEmail.length === 0) {
	results.innerHTML = "Hey Insert Email";
}

else if (inputPassword.length === 0) {
	results.innerHTML = "Hey Insert Password";

}

else if (check) {
	window.location = "user_home.html";
	}

else {
	results.innerHTML = "invalid account";

	}

}
loginBtns.addEventListener('click', logins);

const signups = () =>
{

let inputfname = fnames.value.toString().trim().toLowerCase();
let inputlnames = lnames.value.toString().trim().toLowerCase();
let inputunames = unames.value.toString().trim().toLowerCase();
let inputphones = phones.value.toString().trim().toLowerCase();
let inputEmail = emails1.value.toString().trim().toLowerCase();
let inputPassword = passwords1.value.toString().trim().toLowerCase();
let inputcPassword = cpasswords.value.toString().trim().toLowerCase();


if (inputfname.length === 0) {
	results1.innerHTML = "Hey Insert First Name";
}

else if (inputlnames.length === 0) {
	results1.innerHTML = "Hey Insert Last Name";

}
else if (inputunames.length === 0) {
	results1.innerHTML = "Hey Insert Username";
}

else if (inputphones.length === 0) {
	results1.innerHTML = "Hey Insert Phone Number";

}

else if (inputphones.length < 12) {
	results1.innerHTML = "Phone Number should contain country code";

}

else if (inputEmail.length === 0) {
	results1.innerHTML = "Hey Insert Email";
}

else if (inputPassword.length === 0) {
	results1.innerHTML = "Hey Insert Password";

}

else if (inputcPassword.length === 0) {
	results1.innerHTML = "Hey Insert Confirmation Password";

}

else if (inputPassword !== inputcPassword) {
	results1.innerHTML = "Hey Wrong Confirmation Password";

}

else {

	let data = { id:usersDB.length+1, name: inputfname,  Email: inputEmail,  Password: inputPassword}
	usersDB.push(data);
	signinos.style.display = 'block';
	signupos.style.display = 'none';

   }


}
signupBtns.addEventListener('click', signups);


let userDatabase = usersDB;
localStorage.setItem("localStorageDataBase", usersDB);






const showlogin = () =>{
	signinos.style.display = 'block';
	signupos.style.display = 'none';
}
turnlog.addEventListener('click', showlogin);



const showsignup = () =>{
	signinos.style.display = 'none';
	signupos.style.display = 'block';
}
turnsignupos.addEventListener('click', showsignup);

