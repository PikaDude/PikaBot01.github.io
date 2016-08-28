window.onload = function() {
	function snail(){
                $.ajax({
                    url: "http://pikabot01.xyz/snail/snail.json",
                    dataType: "text",
                    success: function(data) {
                    var json = $.parseJSON(data);
					document.getElementById('total').textContent = json.distance + " millimetres or " + parseInt(json.distance) / 10 + " centimetres or " + parseInt(json.distance) / 10 / 100 + " metres";
					document.getElementById('uptime').textContent = json.uptime;
					document.getElementById('status').textContent = json.status;
					document.getElementById('speed').textContent = json.speed;
					document.getElementById('mood').textContent = json.mood;
					document.getElementById('time').textContent = json.time;
					document.getElementById('energy').textContent = json.energy;
					var weather;
					if (json.weather === "rain")
					{
						weather = "rain.gif";
						weed = "Raining";
					}
					if (json.weather === "clear")
					{
						weather = "clear.jpg";
						weed = "Clear";
					}
					if (json.weather === "fog")
					{
						weather = "fog.jpg";
						weed = "Foggy";
					}
					if (json.weather === "cloudy")
					{
						weather = "cloudy.jpg";
						weed = "Cloudy";
					}
					document.getElementById('weather').textContent = weed;
					var url = json.tiem + "_" + weather;
					document.getElementById('snail').style = "background:url(assets/images/" + url + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;";
					window.setTimeout(snail, 5000);
					}
				}
				);
	}
	snail()
}