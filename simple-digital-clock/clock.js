function displayTime() {
	var currentTime = new Date();

	var getHours = currentTime.getHours();
	var getMinutes = currentTime.getMinutes();
	var getSeconds = currentTime.getSeconds();
	
			if (getHours < 10) {
				getHours = "0" + getHours;
		}
		if (getMinutes < 10) {
			getMinutes = "0" + getMinutes;
		}
		if (getSeconds < 10) {
			getSeconds = "0" + getSeconds;
		}

	var currentTimeString = getHours + ":" + getMinutes + ":" + getSeconds;
	
	var clock = document.getElementById("clock").innerHTML = currentTimeString;

	var t = setTimeout(displayTime, 500);
}

displayTime();