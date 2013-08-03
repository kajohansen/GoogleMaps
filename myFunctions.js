function jump(selection) {
	var url = selection.options[selection.selectedIndex].value;
    if (url != 'select') {
	    window.location.href = url;
    }
}

function DecimalToLatLng(decimal_deg, lat_lng) 
{
	var decimal_deg_str = decimal_deg.toString();
	var degrees_index = decimal_deg_str.indexOf(".");
	var degrees = decimal_deg_str.substr(0, degrees_index);
	var zero = 0;
	
	var decimal_minute = zero + "." + decimal_deg_str.substr(degrees_index + 1, decimal_deg_str.length);
	var min_sixty = decimal_minute * 60;
	var minutes_index = min_sixty.toString().indexOf(".");
	var minutes = min_sixty.toString().substr(0, minutes_index);
	
	var decimal_sec_str = min_sixty.toString();
	var decimal_second = zero + "." + decimal_sec_str.substr(minutes_index + 1, decimal_sec_str.length);
	var sec_sixty = decimal_second * 60;
	var second1 = sec_sixty.toString().substr(0, 2);
	var second2 = sec_sixty.toString().substr(3, 2);
	var seconds = second1 + "." + second2;
	
	if (lat_lng == "Lat") {
		if (decimal_deg_str.charAt(0) == "-") {
			var cardinal = "S";
		} else {
			var cardinal = "N";
		}
	} else if (lat_lng == "Lng") {
		if (decimal_deg_str.charAt(0) == "-") {
			var cardinal = "W";
		} else {
			var cardinal = "E";
		}
	}
	
	return lat_lng + " " + degrees + "° " + minutes + "' " + seconds + '" ' + cardinal; 
}

function LatLngToDecimal(deg, min, sec, cardinal) 
{
	var decimal_min = min / 60;
	var decimal_sec = sec / 3600;
	var decimal = decimal = deg + decimal_min + decimal_sec;
	switch(cardinal)
	{
		case "N":
			return decimal;
		break;
		case "S":
			return -decimal;
		break;
		case "E":
			return decimal;
		break;
		case "W":
			return -decimal;
		break;
	}
}

/*
console.log("Cucicuilco, Mexico Lat: " + LatLngToDecimal(19, 18, 6, "N")); // 19.301666666666666
console.log("Cucicuilco, Mexico Long: " + LatLngToDecimal(99, 10, 54, "W")); // -99.18166666666667
*/
/*
console.log("Goloring, (Go-Low) Lat: " + LatLngToDecimal(50, 20, 22.79, "N")); // 50.33966388888889
console.log("Goloring, (Go-Low) Long: " + LatLngToDecimal(7, 26, 21.69, "E")); // 7.439358333333334
*/
/*
console.log("Newark circle, Lat: " + LatLngToDecimal(40, 3, 7.53, "N")); // 40.05209166666666
console.log("Newark circle, Long: " + LatLngToDecimal(82, 26, 55, "W")); // -82.44861111111112
*/
/*
console.log("Newark octagon, Lat: " + LatLngToDecimal(40, 3, 17.70, "N")); // 40.054916666666664
console.log("Newark octagon, Long: " + LatLngToDecimal(82, 26, 39.48, "W")); // -82.4443
*/
/*
console.log("Newark Fort, Circle Lat: " + LatLngToDecimal(40, 2, 27.67, "N")); // 40.041019444444444
console.log("Newark Fort, Circle Long: " + LatLngToDecimal(82, 25, 52.09, "W")); // -82.43113611111112
*/
/*
console.log("StoneHenge Lat: " + LatLngToDecimal(51, 10, 43.89, "N")); // 51.17885833333333
console.log("StoneHenge Long: " + LatLngToDecimal(1, 49, 34.33, "W")); // -1.8262027777777778
*/
/*
console.log("Latitude should be 122.7625 : " + LatLngToDecimal(122, 45, 45, "N")); // should return 122.7625
console.log("Plymouth England Lat: " + LatLngToDecimal(50, 22, 17.03, "N")); // 50.37139722222222
console.log("Plymouth England Long: " + LatLngToDecimal(4, 8, 32.75, "W")); // -4.142430555555556
*/

/*
console.log("Great Pyramid, Giza Lat: " + LatLngToDecimal(29, 58, 45.53, "N")); // 29.979313888888885
console.log("Great Pyramid, Giza Long: " + LatLngToDecimal(31, 8, 3.02, "E")); // 31.134172222222222
*/

/*
console.log(DecimalToLatLng(51.17926388888888, "Lat"));
console.log(DecimalToLatLng(-1.8262166666666666, "Lng"));
*/