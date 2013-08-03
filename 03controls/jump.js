function jump(selection) {
	var url = selection.options[selection.selectedIndex].value;
    if (url != 'select') {
	    window.location.href = url;
    }
}