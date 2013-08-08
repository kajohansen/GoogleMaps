
function JumpProjectControl(controlDiv, map) {

	controlDiv.style.padding = '4px';
	
	
	// The drop down list for jumping chapters
	var form = document.createElement('form');
	var select_list = document.createElement('select');
	select_list.onchange = function() {
		jumpProject(this);
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

function JumpSiteControl(controlDiv, map) {

	controlDiv.style.padding = '4px';
	
	// The drop down list for jumping chapters
	var form = document.createElement('form');
	var select_list = document.createElement('select');
	select_list.onchange = function() {
		jumpSite(this);
	}
	
	var option0 = document.createElement('option');
	option0.value = "select";
	option0.innerHTML = "Select a site";
	
	var option1 = document.createElement('option');
	option1.value = "Stonehenge";
	option1.innerHTML = "Stonehenge";
	
	var option2 = document.createElement('option');
	option2.value = "NewarkFort";
	option2.innerHTML = "Newark Fort";
	
	var option3 = document.createElement('option');
	option3.value = "NewarkCircle";
	option3.innerHTML = "Newark Circle";
	
	var option4 = document.createElement('option');
	option4.value = "Goloring";
	option4.innerHTML = "Goloring";
	
	var option5 = document.createElement('option');
	option5.value = "Cucuilco";
	option5.innerHTML = "Cucuilco";
	
	var option6 = document.createElement('option');
	option6.value = "Avebury";
	option6.innerHTML = "Avebury Circle";
	
	var option7 = document.createElement('option');
	option7.value = "MoneyPit";
	option7.innerHTML = "Money Pit";
	
	select_list.appendChild(option0);
	select_list.appendChild(option1);
	select_list.appendChild(option2);
	select_list.appendChild(option3);
	select_list.appendChild(option4);
	select_list.appendChild(option5);
	select_list.appendChild(option6);
	select_list.appendChild(option7);
	
	form.appendChild(select_list);
	
	controlDiv.appendChild(form);
}