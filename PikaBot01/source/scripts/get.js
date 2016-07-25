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
if (id == null || id == "")
{
	document.getElementById('number').textContent = "Failed To Load: Invalid User"
	return;
}
try
{
                $.ajax({
                    url: "http://pikabot01.xyz/Stuff/users/" + id + ".json",
                    dataType: "text",
                    success: function(data) {
                    var json = $.parseJSON(data);
					document.getElementById('name').textContent = json.name;
					document.getElementById('description').Content = json.name + "'s Profile";
					document.getElementById('title').textContent = "PikaBot01 - " + json.name + "'s Profile";
					document.getElementById('avatar').src = json.avatar;
					document.getElementById('discrim').textContent = "#" + json.discrim;
					}
				}
				);
}
catch (woah)
{
    document.getElementById('number').textContent = "Failed To Load: User Not Found"
	return;
}
var coinsbal = "http://pikabot01.xyz/Stuff/coins/" + id + ".txt"
var background = "http://pikabot01.xyz/Stuff/backgrounds/" + id + ".txt"
var gamblecount = "http://pikabot01.xyz/Stuff/gamble/count/" + id + ".txt"
var caught = "http://pikabot01.xyz/Stuff/pokemon/caught/" + id + ".txt"
var pokeballs = "http://pikabot01.xyz/Stuff/pokemon/pokeballs/" + id + ".txt"
var bio = "http://pikabot01.xyz/Stuff/bio/" + id + ".txt"
var pants = "http://pikabot01.xyz/Stuff/pants/awards/" + id + "/"
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
document.getElementById('caught').textContent = "0";
}
document.getElementById('tableprogress').style = "width: 20%";
document.getElementById('number').textContent = "20%";
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
document.getElementById('pokeballs').textContent = "6 (Default)";
}
document.getElementById('tableprogress').style = "width: 40%";
document.getElementById('number').textContent = "40%";
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
document.getElementById('coinsbal').textContent = "Not Created";
}
document.getElementById('tableprogress').style = "width: 60%";
document.getElementById('number').textContent = "60%";
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
document.getElementById('gamblecount').textContent = "0";
}
try
	{
	    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", bio, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('bio').textContent = allText;
            }
        }
    }
    rawFile.send(null);
}catch(woah)
{
document.getElementById('bio').textContent = "User has not set a bio (>profile setbio I am cool)";
}
var backgroundurl = "";
try
	{
	    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", background, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				var backgroundurl = "http://pikabot01.xyz/Stuff/background-images/" + allText;
                document.getElementById('dankmemes').style = "background:url(" + backgroundurl + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;";
            }
        }
    }
    rawFile.send(null);
}catch(woah)
{
}
//
try
	{
	    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", bio, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('pants1').textContent = "Thinking (and shitting) inside the box - Congratulations, all that potty training finally paid off.";
            }
        }
    }
    rawFile.send(null);
}catch(woah)
{
document.getElementById('pants1').textContent = "Thinking (and shitting) inside the box - ???";
}
try
	{
	    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", bio, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				document.getElementById('pants1').textContent = "Thinking (and shitting) inside the box - Congratulations, all that potty training finally paid off.";
            }
        }
    }
    rawFile.send(null);
}catch(woah)
{
document.getElementById('pants1').textContent = "Thinking (and shitting) inside the box - ???";
}
document.getElementById('tableprogress').style = "width: 80%";
document.getElementById('number').textContent = "80%";
document.getElementById('tableprogress').style = "width: 100%";
document.getElementById('number').textContent = "100%";
document.getElementById('tableprogress').style = "display: none;";
document.getElementById('tableload').style = "display: none;";
document.getElementById('imBLIND').style = "display: none;";
Materialize.showStaggeredList('#fancy')
}