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

    //latlngs (redundant, yes)

var south_stationLL = new google.maps.LatLng(42.352271, -71.0554200000001);
var andrewLL = new google.maps.LatLng(42.330154, -71.057655);
var porterLL = new google.maps.LatLng(42.3884, -71.11914899999999);
var harvardLL = new google.maps.LatLng(42.373362, -71.118956);
var jfkLL = new google.maps.LatLng(42.320685, -71.052391);
var savinLL = new google.maps.LatLng(42.31129, -71.053331);
var parkLL = new google.maps.LatLng(42.35639457, -71.0624242);
var broadwayLL = new google.maps.LatLng(42.342622, -71.056967);
var n_quincyLL = new google.maps.LatLng(42.275275, -71.029583);
var shawmutLL = new google.maps.LatLng(42.29312583, -71.06573796000001);
var davisLL = new google.maps.LatLng(42.39674, -71.121815);
var alewifeLL = new google.maps.LatLng(42.395428, -71.142483);
var kendallLL = new google.maps.LatLng(42.36249079, -71.08617653);
var charlesLL = new google.maps.LatLng(42.361166, -71.070628);
var downtownLL = new google.maps.LatLng(42.355518, -71.060225);
var quincy_cLL = new google.maps.LatLng(42.251809, -71.005409);
var quincy_aLL = new google.maps.LatLng(42.233391, -71.007153);
var ashmontLL = new google.maps.LatLng(42.284652, -71.06448899999999);
var wollastonLL = new google.maps.LatLng(42.2665139, -71.0203369);
var fieldsLL = new google.maps.LatLng(42.300093, -71.061667);
var centralLL = new google.maps.LatLng(42.365486, -71.103802);
var braintreeLL = new google.maps.LatLng(42.2078543, -71.0011385); 

var stations = [south_stationLL, andrewLL, porterLL, harvardLL, jfkLL, savinLL, parkLL,
                broadwayLL, n_quincyLL, shawmutLL, davisLL, alewifeLL, kendallLL, charlesLL,
                downtownLL, quincy_cLL, ashmontLL, wollastonLL, fieldsLL, centralLL, braintreeLL];

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

    var min = 999999;
    var min_index = 999;

    for(var i = 0; i < stations.length; ++i) {
        var temp = google.maps.geometry.spherical.computeDistanceBetween(me, stations[i]);
        if(temp < min) {
            min = temp;
            min_index = i;
            }
        }

    var closest = {lat: stations[min_index].latitude, lon: stations[min_index].longitude}
    var shortpath = [me, closest];

    var polylineME = new google.maps.Polyline({
        path: shortpath,
        geodesic: true,
        strokeColor: '#0000FF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
    polylineME.setMap(map);
    alert("distance between me and davis:" + min);

    marker = new google.maps.Marker({
        position: me,
    });

    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {
                    if(min_index === 1) {
                        infowindow.setContent("Closest station: South Station");
                    } else if(min_index === 2) {
                        infowindow.setContent("Closest station: Andrew Station");
                    } else if(min_index === 3) {
                        infowindow.setContent("Closest station: Porter Square");
                    } else if(min_index === 4) {
                        infowindow.setContent("Closest station: Harvard Square");
                    } else if(min_index === 5) {
                        infowindow.setContent("Closest station: JFK Station");
                    } else if(min_index === 6) {
                        infowindow.setContent("Closest station: Savin Hill");
                    } else if(min_index === 7) {
                        infowindow.setContent("Closest station: Park Station");
                    } else if(min_index === 8) {
                        infowindow.setContent("Closest station: Broadway Station");
                    } else if(min_index === 9) {
                        infowindow.setContent("Closest station: North Quincy Station");
                    } else if(min_index === 10) {
                        infowindow.setContent("Closest station: Shawmut Station");
                    } else if(min_index === 11) {
                        infowindow.setContent("Closest station: Davis Square");
                    } else if(min_index === 12) {
                        infowindow.setContent("Closest station: Alewife Station");
                    } else if(min_index === 13) {
                        infowindow.setContent("Closest station: Kendall Station");
                    } else if(min_index === 14) {
                        infowindow.setContent("Closest station: Charles Station");
                    } else if(min_index === 15) {
                        infowindow.setContent("Closest station: Downtown Crossing");
                    } else if(min_index === 16) {
                        infowindow.setContent("Closest station: Quincy Center Station");
                    } else if(min_index === 17) {
                        infowindow.setContent("Closest station: Ashmont Station");
                    } else if(min_index === 18) {
                        infowindow.setContent("Closest station: Wollaston Station");
                    } else if(min_index === 19) {
                        infowindow.setContent("Closest station: Field Crossing Station");
                    } else if(min_index === 20) {
                        infowindow.setContent("Closest station: Central Square Station");
                    } else if(min_index === 21) {
                        infowindow.setContent("Closest station: Braintree Station");
                    }


                    infowindow.open(map, marker);
                });
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
}