var airhorn2 = 0;
window.onload = function() {
}
function airhorn(){
	if (document.getElementById('airhorn').className === "")
	{
	airhorn2++;
	document.getElementById('airhorn2').textContent = airhorn2 + " Horns Air'd";
	var airhorn = Math.floor((Math.random() * 7) + 1);
	if (airhorn === 1){document.getElementById('airhorn').className = "shake shake-constant";}
	if (airhorn === 2){document.getElementById('airhorn').className = "shake-hard shake-constant";}
	if (airhorn === 3){document.getElementById('airhorn').className = "shake-little shake-constant";}
	if (airhorn === 4){document.getElementById('airhorn').className = "shake-horizontal shake-constant";}
	if (airhorn === 5){document.getElementById('airhorn').className = "shake-vertical shake-constant";}
	if (airhorn === 6){document.getElementById('airhorn').className = "shake-rotate shake-constant";}
	if (airhorn === 7){document.getElementById('airhorn').className = "shake-crazy shake-constant";}
	if (airhorn > 5){var audio = new Audio('airhorn.mp3'); audio.play(); window.setTimeout(function (){document.getElementById('airhorn').className = "";}, 2000);}
	if (airhorn === 5){var audio = new Audio('airhorn.notmp3'); audio.play(); window.setTimeout(function (){document.getElementById('airhorn').className = "";}, 3000);}
	if (airhorn < 5){var audio = new Audio('airhorn.notmp3'); audio.play(); window.setTimeout(function (){document.getElementById('airhorn').className = "";}, 3000);}
	}
}