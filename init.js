var map;

function JumpControl(controlDiv, map) {

	controlDiv.style.padding = '4px';
	
	
	// The drop down list for jumping chapters
	var form = document.createElement('form');
	var select_list = document.createElement('select');
	select_list.onchange = function() {
		jump(this);
	}
	
	var option0 = document.createElement('option');
	option0.value = "select";
	option0.innerHTML = "Select a chapter";
	
	var option1 = document.createElement('option');
	option1.value = "http://mountain.local/~superuser/JavaScript/GoogleMaps/01basics";
	option1.innerHTML = "chapter 1";
	
	var option3 = document.createElement('option');
	option3.value = "http://mountain.local/~superuser/JavaScript/GoogleMaps/03controls";
	option3.innerHTML = "chapter 3";
	
	var option5 = document.createElement('option');
	option5.value = "http://mountain.local/~superuser/JavaScript/GoogleMaps/05Overlays";
	option5.innerHTML = "chapter 5";
	
	select_list.appendChild(option0);
	select_list.appendChild(option1);
	select_list.appendChild(option3);
	select_list.appendChild(option5);
	
	form.appendChild(select_list);
	
	controlDiv.appendChild(form);
}


function initialize() 
{
	var mapOptions = {
	    zoom: 3,
	    center: new google.maps.LatLng(20, 0), 
	    scaleControl : true,
	    mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	google.maps.visualRefresh = true; // Enable the visual refresh
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	var jump_control_div = document.createElement('div');
	var jumpControl = new JumpControl(jump_control_div, map);
	jump_control_div.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(jump_control_div);
	
	// functions in mapmarkers.js
	drawMarkers();
	drawLines();
	drawCircles();
	
}


// Load map
google.maps.event.addDomListener(window, 'load', initialize);








