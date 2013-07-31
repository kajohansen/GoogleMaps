
var stoneHenge = new google.maps.LatLng(51.17926388888888, -1.8262166666666666);
var newarkFort = new google.maps.LatLng(40.04216666666667, -82.43011111111112);
var newarkCircle = new google.maps.LatLng(40.05215, -82.44748333333334);
var newarkOctagon = new google.maps.LatLng(40.054916666666664, -82.4443);
var goloring = new google.maps.LatLng(50.33966388888889, 7.439358333333334);
var cucicuilco = new google.maps.LatLng(19.301666666666666, -99.18166666666667);

var locationArray = [stoneHenge, newarkFort, newarkCircle, newarkOctagon, goloring, cucicuilco];
var locationNameArray = ['Stonehenge','Fort','Newark Circle','Octagon','Goloring','Cucicuilco'];

function initialize() 
{
	var map;
	var mapOptions = {
	    zoom: 3,
	    center: new google.maps.LatLng(40.054916666666664, -82.4443), 
	    scaleControl : true,
	    mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	google.maps.visualRefresh = true; // Enable the visual refresh
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	// Map Markers
	var coord;
	for (coord in locationArray) {
		new google.maps.Marker({
		  position: locationArray[coord],
		  map: map,
		  title: locationNameArray[coord]
		});
	}
}


// Load map
google.maps.event.addDomListener(window, 'load', initialize);








