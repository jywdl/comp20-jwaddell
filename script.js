var map;
var x = document.getElementById("demo");

function getLocation() {
    if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(initMap);
    } else {
	x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function initMap() {
    var lat = position.coords.latitude; 
    var lon = position.coords.longitude;
    map = new google.maps.Map(document.getElementById('map'), {
	    center = {lat: lat, lng: lon},
	    zoom: 8
    });
}