var map;

function initialize() 
{
	var mapOptions = {
	    zoom: 3,
	    center: new google.maps.LatLng(30, -30), 
	    scaleControl : true,
	    mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	google.maps.visualRefresh = true; // Enable the visual refresh
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	// Jump project controls
	var jump_control_div = document.createElement('div');
	var jumpControl_project = new JumpProjectControl(jump_control_div, map);
	jump_control_div.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(jump_control_div);
	
	// Jump site controls
	var jump_site_div = document.createElement('div');	
	var jumpControl_site = new JumpSiteControl(jump_site_div, map);
	jump_site_div.index = 2;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(jump_site_div);
	
	// functions in mapmarkers.js
	drawMarkers();
	drawLines();
	drawCircles();
	
}

// Load map
google.maps.event.addDomListener(window, 'load', initialize);








