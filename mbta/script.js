var map;
var infowindow;

//stations
var south_station = {lat: 42.352271, lng: -71.0554200000001};
var andrew = {lat: 42.330154, lng: -71.057655};
var porter = {lat: 42.3884, lng: -71.11914899999999};
var harvard = {lat: 42.373362, lng: -71.118956};
var jfk = {lat: 42.320685, lng: -71.052391};
var savin = {lat: 42.31129, lng: -71.053331 };
var park = {lat: 42.35639457, lng: -71.0624242};
var broadway = {lat: 42.342622, lng: -71.056967};
var n_quincy = {lat: 42.275275, lng: -71.029583};
var shawmut = {lat: 42.29312583, lng: -71.06573796000001};
var davis = {lat: 42.39674, lng: -71.121815};
var alewife = {lat: 42.395428, lng: -71.142483};
var kendall = {lat: 42.36249079, lng: -71.08617653};
var charles = {lat: 42.361166, lng: -71.070628};
var downtown = {lat: 42.355518, lng: -71.060225};
var quincy_c = {lat: 42.251809, lng: -71.005409};
var quincy_a = {lat: 42.233391, lng: -71.007153};
var ashmont = {lat: 42.284652, lng: -71.06448899999999};
var wollaston = {lat: 42.2665139, lng: -71.0203369};
var fields = {lat: 42.300093, lng: -71.061667};
var central = {lat: 42.365486, lng: -71.103802};
var braintree = {lat: 42.2078543, lng: -71.0011385}; 

function initMap() {
    var pre_jfk = [alewife, davis, porter, harvard, central, kendall, charles, park, downtown, 
    south_station, andrew, jfk];
    var braintree_path = [jfk, n_quincy, wollaston, quincy_c, quincy_a, braintree];
    var ashmont_path = [jfk, savin, fields, shawmut, ashmont];                     


    //set up map
    var options = {
	zoom: 13,
	center: south_station,
	mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 

    //make map
    map = new google.maps.Map(document.getElementById('map_canvas'), options );

    //make markers
    var image = '1f525.png';
    var m_south = new google.maps.Marker({
	    position: south_station,
        map: map,
	    title: "South Station, Boston, MA",
        icon: image
    });

    var m_andrew = new google.maps.Marker({
        position: andrew,
        map: map,
        title: "Andrew, Boston, MA",
        icon: image
    });

    var m_porter = new google.maps.Marker({
        position: porter,
        map: map,
        title: "Porter Square, Boston, MA",
        icon: image
    });
    var m_harvard = new google.maps.Marker({
        position: harvard,
        map: map,
        title: "Harvard Square, Boston, MA",
        icon: image
    });

    var m_jfk = new google.maps.Marker({
        position: jfk,
        map: map,
        title: "JFK Station, Boston, MA",
        icon: image
    });

    var m_savin = new google.maps.Marker({
        position: savin,
        map: map,
        title: "Savin Hill, Boston, MA",
        icon: image
    });

    var m_park = new google.maps.Marker({
        position: park,
        map: map,
        title: "Park Street, Boston, MA",
        icon: image
    });

    var m_broadway = new google.maps.Marker({
        position: broadway,
        map: map,
        title: "Broadway Station, Boston, MA",
        icon: image
    });

    var m_n_quincy = new google.maps.Marker({
        position: n_quincy,
        map: map,
        title: "North Quincy, Boston, MA",
        icon: image
    });

    var m_shawmut = new google.maps.Marker({
        position: shawmut,
        map: map,
        title: "Shawmut Station, Boston, MA",
        icon: image
    });

    var m_davis = new google.maps.Marker({
        position: davis,
        map: map,
        title: "Davis Square, Boston, MA",
        icon: image
    });

    var m_alewife = new google.maps.Marker({
        position: alewife,
        map: map,
        title: "Alewife Station, Boston, MA",
        icon: image
    });

    var m_kendall = new google.maps.Marker({
        position: kendall,
        map: map,
        title: "Kendall Station, Boston, MA",
        icon: image
    });

    var m_charles = new google.maps.Marker({
        position: charles,
        map: map,
        title: "Charles Station, Boston, MA",
        icon: image
    });

    var m_downtown = new google.maps.Marker({
        position: downtown,
        map: map,
        title: "Downtown Crossing, Boston, MA",
        icon: image
    });

    var m_quincy_c = new google.maps.Marker({
        position: quincy_c,
        map: map,
        title: "Quincy Center, Boston, MA",
        icon: image
    });

    var m_quincy_a = new google.maps.Marker({
        position: quincy_a,
        map: map,
        title: "Quincy Adams Station, Boston, MA",
        icon: image
    });

    var m_ashmont = new google.maps.Marker({
        position: ashmont,
        map: map,
        title: "Ashmont Station, Boston, MA",
        icon: image
    });

    var m_wollaston = new google.maps.Marker({
        position: wollaston,
        map: map,
        title: "Wollaston Station, Boston, MA",
        icon: image
    });

    var m_fields = new google.maps.Marker({
        position: fields,
        map: map,
        title: "Fields Corner, Boston, MA",
        icon: image
    });

    var m_central = new google.maps.Marker({
        position: central,
        map: map,
        title: "Central Square, Boston, MA",
        icon: image
    });

    var m_braintree = new google.maps.Marker({
        position: braintree,
        map: map,
        title: "Braintree Station, Boston, MA",
        icon: image
    });

    //polyline
    var polylineA = new google.maps.Polyline({
        path: pre_jfk,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    var polylineB = new google.maps.Polyline({
        path: braintree_path,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    var polylineC = new google.maps.Polyline({
        path: ashmont_path,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    polylineA.setMap(map);
    polylineB.setMap(map);
    polylineC.setMap(map);

    //put yourself as a marker
    var myLat = 0;
    var myLon = 0;
    var me = new google.maps.LatLng(myLat, myLon);
    infowindow = new google.maps.InfoWindow();

    getMyLocation();
}

function getMyLocation()
{
    if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
                    navigator.geolocation.getCurrentPosition(function(position) {
                        myLat = position.coords.latitude;
                        myLng = position.coords.longitude;
                        renderMap();
                    });
                }
                else {
                    alert("Geolocation is not supported by your web browser.");
                }
}

function renderMap() {
                me = new google.maps.LatLng(myLat, myLng);
                
                map.panTo(me);
                marker = new google.maps.Marker({
                    position: me,
                    title: "You are here!"
                });
                marker.setMap(map);
                    
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(marker.title);
                    infowindow.open(map, marker);
                });
            }