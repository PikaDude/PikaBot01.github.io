window.onload = function() {
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var id = getParameterByName('id');

var coinsbal = "http://128.199.142.235/Stuff/coins/" + id + ".txt"
var gamblecount = "http://128.199.142.235/Stuff/gamble/count/" + id + ".txt"
var caught = "http://128.199.142.235/Stuff/pokemon/caught/" + id + ".txt"
var pokeballs = "http://128.199.142.235/Stuff/pokemon/pokeballs/" + id + ".txt"
try
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", caught, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('caught').textContent = allText;
            }
        }
    }
    rawFile.send(null);
}
catch(woah)
{
document.getElementById('caught').textContent = "null";
}
	try
	{
	    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", pokeballs, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('pokeballs').textContent = allText;
            }
        }
    }
    rawFile.send(null);
	}catch(woah)
{
document.getElementById('pokeballs').textContent = "null";
}
try
{
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", coinsbal, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('coinsbal').textContent = allText;
            }
        }
    }
    rawFile.send(null);
}catch(woah)
{
document.getElementById('coinsbal').textContent = "null";
}
try
{
		var rawFile = new XMLHttpRequest();
    rawFile.open("GET", gamblecount, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('gamblecount').textContent = allText;
            }
        }
    }
    rawFile.send(null);
}catch(woah)
{
document.getElementById('gamblecount').textContent = "null";
}
if (id == null || id == "")
{
	window.alert("User not found");
	return;
}
                $.ajax({
                    url: "http://128.199.142.235/Stuff/users/" + id + ".json",
                    dataType: "text",
                    success: function(data) {
                    var json = $.parseJSON(data);
					document.getElementById('name').textContent = json.name + "'s Stats";
					document.getElementById('description').Content = json.name + "'s Stats";
					document.getElementById('title').textContent = json.name + "'s Stats";
					document.getElementById('avatar').src = json.avatar;
					}
				}
				);
}