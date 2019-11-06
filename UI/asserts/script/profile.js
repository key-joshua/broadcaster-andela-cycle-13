
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





const ul = document.getElementById("ul");
const ul1 = document.getElementById("ul1");
const dates = document.getElementById("dates");
const datesa = document.getElementById("datesa");
const trigger1 = document.querySelector('.pro');
const trigger2 = document.querySelector('.menu');
const hideForm = document.getElementById("create");
const hideForma = document.getElementById("createa");
const hideFormb = document.getElementById("createb");
const showFlag = document.getElementById("flag");
const showIntv = document.getElementById("intv");
const button_edit = document.getElementById("button_edt");
const button_status = document.getElementById("button_st");

let btn_1 = document.getElementById("redflags");
let btn_2 =document.getElementById("intervetions");

let op_1 = "redflag";
let op_2 = "intervetion";
const show = (redflags,intervetions,element) =>
{
	btn_1.style.display = element.value === op_1 ? 'block' : 'none' ;
    btn_2.style.display = element.value === op_2 ? 'block' : 'none' ;
}


const hideCreateForm = () =>{
	hideForm.style.display = 'none';
	hideForma.style.display = 'block';
	hideFormb.style.display = 'none';
}

button_edit.addEventListener('click',hideCreateForm);

const hideCreateForma = () =>{
	hideForm.style.display = 'none';
	hideForma.style.display = 'none';
	hideFormb.style.display = 'block';
}

button_st.addEventListener('click',hideCreateForma);

const showCreateFormb = () =>{
	hideForm.style.display = 'block';
	hideForma.style.display = 'none';
	hideFormb.style.display = 'none';
}

showFlag.addEventListener('click',showCreateFormb);
showIntv.addEventListener('click',showCreateFormb);



const currentDates = new Date().toString();
dates.value = currentDates;


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



let posbtn = document.getElementById("postbtn");
let statusos = document.getElementById("statuso");
let cmntstatusosos = document.getElementById("statusoso");
const postStatus = () =>{
	statusos.innerHTML = cmntstatusosos.value;
}
postbtn.addEventListener('click', postStatus);


let welbios = document.getElementById("welbio");
let welfnames = document.getElementById("welfname");
let wellnames = document.getElementById("wellname");
let welpasswords = document.getElementById("welpassword");
let welnames = document.getElementById("welname");
let welphones = document.getElementById("welphone");
let welemails = document.getElementById("welemail");
let weladdress = document.getElementById("weladdres");
let fnames = document.getElementById("fname");
let lnames = document.getElementById("lname");
let unames = document.getElementById("uname");
let phones = document.getElementById("phone");
let emails = document.getElementById("email1");
let addre = document.getElementById("addres");
let emails1 = document.getElementById("email1");
let passwords1 = document.getElementById("password1");
let cpasswords = document.getElementById("cpassword");
let bios = document.getElementById("bio");
let resultos = document.getElementById("resulto");
let btnupdatos = document.getElementById("btnupdato");
let btnoaa = document.getElementById("btnoa");
let btnobb = document.getElementById("btnob");
let btnocc = document.getElementById("btnoc");
let btnodd = document.getElementById("btnod");
let btnoee = document.getElementById("btnoe");
let button_edt = document.getElementById("button_edt");


const showAllDetail = () =>{
	btnoaa.style.display = 'block';
	btnobb.style.display = 'block';
	btnocc.style.display = 'block';
	btnodd.style.display = 'block';
	btnoee.style.display = 'block';
}
button_edt.addEventListener('click', showAllDetail);

fnames.value = welfnames.innerHTML;
lnames.value = wellnames.innerHTML;
unames.value = welnames.innerHTML;
phones.value = welphones.innerHTML;
emails.value = welemails.innerHTML;
addre.value = weladdress.innerHTML;
bios.value = welbios.innerHTML;

const updateYourProfile = () =>{
	welfnames.innerHTML = fnames.value;
	wellnames.innerHTML = lnames.value;
	welnames.innerHTML = unames.value;
	welphones.innerHTML = phones.value ;
	welemails.innerHTML = emails.value ;
	weladdress.innerHTML = addre.value;
	welbios.innerHTML = bios.value;

}
btnupdatos.addEventListener('click', updateYourProfile);



let outs = document.getElementById("out");
let names = document.getElementById("name");
let date = document.getElementById("dates");
let titles = document.getElementById("title");
let orders = document.getElementById("order");
let latitude = document.getElementById("lat");
let longitude = document.getElementById("lng");
let statuss = document.getElementById("status");                     
let filesd = document.getElementById("fild");                     
let files = document.getElementById("file");
let tags = document.getElementById("tag");
let comments = document.getElementById("comment");
let btn_red = document.getElementById("redflags");
let btn_intv =document.getElementById("intervetions");


const createRedAndIntv = () =>{
	let setTitles = document.getElementById("setTitle");
	let setImages = document.getElementById("setImage");
	outs.style.display = 'block';

	let inputname = names.value;
	let inputdate = date.value;
	let inputtitle = titles.value;
	let inputorder = orders.value;
	let inputlat = latitude.value;
	let inputlng = longitude.value;
    statuss.value="draft";
	let inputfilo = filesd.value.replace("C:\\fakepath\\", "");
	let inputfile = files.value.replace("C:\\fakepath\\", "");
	let inputtag = tags.value;
	let inputcomment = comments.value;



	if (inputfile.length != 0) 
	{
		setTitle.innerHTML = titles.value;
		setImages.src = `../asserts/img/${inputfile}`;
	}

	else
	{
		setTitle.innerHTML = titles.value;
		setImages.src = `../asserts/img/profile.jpg`;
	}

}


btn_red.addEventListener('click', createRedAndIntv);
btn_intv.addEventListener('click', createRedAndIntv);
