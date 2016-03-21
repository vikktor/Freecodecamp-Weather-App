
	function get_geolocation() {
		navigator.geolocation.getCurrentPosition(getWeather);
	}



	
	// api key: 38ab30dfb49c8e2c7e4ccc835f18c659 - https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE
	function getWeather(position) {
		
	long = position.coords.longitude
    lat = position.coords.latitude;
	console.log(lat, long)
	
	$.getJSON("https://api.forecast.io/forecast/38ab30dfb49c8e2c7e4ccc835f18c659/" + lat + ',' + long)


	}