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


let titlings = document.getElementById("titling");
let isos = document.getElementById("iso");
let nomes = document.getElementById("nome");
let typess = document.getElementById("types");
let cordinates = document.getElementById("cordinate");
let latitude = document.getElementById("latit");
let longitude = document.getElementById("longit");
let tags = document.getElementById("tag");
let datess = document.getElementById("dates");
let contents = document.getElementById("content");


let videoso = document.getElementById("videono");
let images = document.getElementById("image");
let updateimages = document.getElementById("updateImage");


let titlo = document.getElementById("titlos");
let ido = document.getElementById("idos");
let usernamo = document.getElementById("usernamos");
let ordero = document.getElementById("orderos");
let locationo = document.getElementById("locationos");
let lati = document.getElementById("lot");
let long = document.getElementById("lon");
let tago = document.getElementById("tagos");
let dato = document.getElementById("datos");
let video = document.getElementById("videos");
let imago = document.getElementById("imagos");
let commento = document.getElementById("commentos");
let update = document.getElementById("update");

titlo.value = titlings.innerHTML;
ido.value = isos.innerHTML;
usernamo.value = nomes.innerHTML;
locationo.value = cordinates.innerHTML;
lati.value = latitude.innerHTML;
long.value = longitude.innerHTML;
tago.value = tags.innerHTML;
dato.value = new Date().toString();
commento.value = contents.innerHTML;

function initMap() {

	var latitudes = document.getElementById("lot").value;
	var longitudes = document.getElementById("lon").value;

	if (latitudes && longitudes)
	{
		var latitudeso = parseInt(document.getElementById("lot").value);
		var longitudeso = parseInt(document.getElementById("lon").value);

        latitude.innerHTML = document.getElementById("lot").value;
        longitude.innerHTML = document.getElementById("lon").value; 


        var latlng = new google.maps.LatLng(latitudeso, longitudeso);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              cordinates.innerHTML = "Location: " + results[1].formatted_address;
            }
          }
          else{
          	cordinates.innerHTML = "Enable Geocoding Service to get Location ";
          }

        });

		let location = {lat: latitudeso, lng: longitudeso};
		let map = new google.maps.Map(document.getElementById("map"), {
			center:location,
			zoom: 2,
		});
		let marker = new google.maps.Marker({
			position: location,
			map: map
		});
	}

	else
	{
		let latitudo = document.getElementById("lot").value = latitude.innerHTML;
		let longitudo = document.getElementById("lon").value = longitude.innerHTML;

		latitude.innerHTML = latitude.innerHTML;
        longitude.innerHTML = longitude.innerHTML

        var latlng = new google.maps.LatLng(latitudo, longitudo);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              cordinates.innerHTML = "Location: " + results[1].formatted_address;
            }
          }
          else{
            cordinates.innerHTML = "Enable Geocoding Service to get Location ";
          }

        });

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
}



const updateRedAndIntv = () =>{
titlings.innerHTML = titlos.value;
isos.innerHTML = ido.value;
nomes.innerHTML = usernamo.value;
typess.innerHTML = ordero.value;
tags.innerHTML = tago.value;
datess.innerHTML = dato.value;
contents.innerHTML = commento.value;

let inputvideo = video.value.replace("C:\\fakepath\\", "");
videoso.src = `../asserts/ivideo/${inputvideo}`;

let inputimage = imago.value.replace("C:\\fakepath\\", "");
images.src = `../asserts/img/${inputimage}`;

}
update.addEventListener('click', updateRedAndIntv);

