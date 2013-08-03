
var stoneHenge = new google.maps.LatLng(51.17885833333333, -1.8262027777777778);
var newarkFort = new google.maps.LatLng(40.041019444444444, -82.43113611111112);
var newarkCircle = new google.maps.LatLng(40.05209166666666, -82.44861111111112);
var newarkOctagon = new google.maps.LatLng(40.054916666666664, -82.4443);
var goloring = new google.maps.LatLng(50.33966388888889, 7.439358333333334);
var cucicuilco = new google.maps.LatLng(19.301666666666666, -99.18166666666667);

var locationArray = [stoneHenge, newarkFort, newarkCircle, newarkOctagon, goloring, cucicuilco];
var locationNameArray = ['Stonehenge','Fort','Newark Circle','Octagon','Goloring','Cucicuilco'];
var radiusArray = [55, 170, 160, 50, 90, 55];

function drawMarkers() {
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

function drawCircles() {
	// Map circles
	var index;
	for (index in radiusArray) {
		// Construct the circle for each value in citymap. We scale population by 20.
		new google.maps.Circle({
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: map,
			center: locationArray[index],
			radius: radiusArray[index]
		});
	}
}

function drawLines() {
	
	// Map Line coords
	var stoneHenge_cucicuilco = [
		stoneHenge,
		cucicuilco
	];
	var goloring_newarkOctagon = [
		goloring,
		newarkOctagon
	];
	var stoneHenge_newarkFort = [
		stoneHenge,
		newarkFort
	];
	var newarkCircle_newarkOctagon = [
		newarkCircle,
		newarkOctagon
	];
	var newarkCircle_stoneHenge = [
		newarkCircle,
		stoneHenge
	];
	// Map Line Polylines
	var path_one = new google.maps.Polyline({
		path: stoneHenge_cucicuilco,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_two = new google.maps.Polyline({
		path: goloring_newarkOctagon,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_three = new google.maps.Polyline({
		path: stoneHenge_newarkFort,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_four = new google.maps.Polyline({
		path: newarkCircle_newarkOctagon,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var path_five = new google.maps.Polyline({
		path: newarkCircle_stoneHenge,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	// Draw Map Lines
	path_one.setMap(map);
	path_two.setMap(map);
	path_three.setMap(map);
	path_four.setMap(map);
	path_five.setMap(map);
}
