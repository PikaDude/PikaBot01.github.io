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
	document.getElementById('number').textContent = "Invalid User"
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
    document.getElementById('number').textContent = "User Not Found"
	return;
}
document.getElementById('tableprogress').style = "width: 6%";
document.getElementById('number').textContent = "6%";
var coinsbal = "http://pikabot01.xyz/Stuff/coins/" + id + ".txt"
var background = "http://pikabot01.xyz/Stuff/backgrounds/" + id + ".txt"
var gamblecount = "http://pikabot01.xyz/Stuff/gamble/count/" + id + ".txt"
var caught = "http://pikabot01.xyz/Stuff/pokemon/caught/" + id + ".txt"
var pokeballs = "http://pikabot01.xyz/Stuff/pokemon/pokeballs/" + id + ".txt"
var bio = "http://pikabot01.xyz/Stuff/bio/" + id + ".txt"
var pants = "http://pikabot01.xyz/Stuff/pants/awards/" + id + "/"
// end start stuff, now to GET everything, amirite
function get(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
	return rawFile.responseText;
}
function FileExists(urlToFile)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}
document.getElementById('caught').textContent = get(caught);
document.getElementById('tableprogress').style = "width: 12%";
document.getElementById('number').textContent = "12%";
document.getElementById('pokeballs').textContent = get(pokeballs);
document.getElementById('tableprogress').style = "width: 18%";
document.getElementById('number').textContent = "18%";
document.getElementById('coinsbal').textContent = get(coinsbal);
document.getElementById('tableprogress').style = "width: 24%";
document.getElementById('number').textContent = "24%";
document.getElementById('gamblecount').textContent = get(gamblecount);
document.getElementById('tableprogress').style = "width: 30%";
document.getElementById('number').textContent = "30%";
document.getElementById('bio').textContent = get(bio);
document.getElementById('tableprogress').style = "width: 36%";
document.getElementById('number').textContent = "36%";
var backgroundurl = "http://pikabot01.xyz/Stuff/background-images/" + get(background);
document.getElementById('dankmemes').style = "background:url(" + backgroundurl + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;";
document.getElementById('tableprogress').style = "width: 42%";
document.getElementById('number').textContent = "42%";
//
try {if (FileExists(pants + "1.txt"))
document.getElementById('pants1').textContent = "Congratulations, all that potty training finally paid off."; }catch (woah){
document.getElementById('pants1').textContent = "???";}
document.getElementById('tableprogress').style = "width: 48%";
document.getElementById('number').textContent = "48%";
try {if (FileExists(pants + "2.txt"))
document.getElementById('pants2').textContent = "It's not his fault the door was so hard to open.";}catch (woah){
document.getElementById('pants2').textContent = "???";}
document.getElementById('tableprogress').style = "width: 54%";
document.getElementById('number').textContent = "54%";
try {if (FileExists(pants + "3.txt"))
document.getElementById('pants3').textContent = "Sometimes even zero effort is awarded.";}catch (woah){
document.getElementById('pants3').textContent = "???";}
document.getElementById('tableprogress').style = "width: 60%";
document.getElementById('number').textContent = "60%";
try {if (FileExists(pants + "4.txt"))
document.getElementById('pants4').textContent = "Pants. They get you every time...";}catch (woah){
document.getElementById('pants4').textContent = "???";}
document.getElementById('tableprogress').style = "width: 66%";
document.getElementById('number').textContent = "66%";
try {if (FileExists(pants + "5.txt"))
document.getElementById('pants5').textContent = "Giving up is never the answer. Or is it?";}catch (woah){
document.getElementById('pants5').textContent = "???";}
document.getElementById('tableprogress').style = "width: 72%";
document.getElementById('number').textContent = "72%";
try {if (FileExists(pants + "6.txt"))
document.getElementById('pants6').textContent = "How convenient that you had those pills.";}catch (woah){
document.getElementById('pants6').textContent = "???";}
document.getElementById('tableprogress').style = "width: 78%";
document.getElementById('number').textContent = "78%";
try {if (FileExists(pants + "7.txt"))
document.getElementById('pants7').textContent = "...to not poop for an extra five seconds.";}catch (woah){
document.getElementById('pants7').textContent = "???";}
try {if (FileExists(pants + "8.txt"))
document.getElementById('pants8').textContent = "You shit before the game began!";}catch (woah){
document.getElementById('pants8').textContent = "???";}
document.getElementById('tableprogress').style = "width: 84%";
document.getElementById('number').textContent = "84%";
try {if (FileExists(pants + "1.txt") && FileExists(pants + "2.txt") && FileExists(pants + "3.txt") && FileExists(pants + "4.txt") && FileExists(pants + "5.txt") && FileExists(pants + "6.txt") && FileExists(pants + "7.txt") && FileExists(pants + "8.txt"))
document.getElementById('pants9').textContent = "And you have a crown to prove it!";}catch (woah){
document.getElementById('pants9').textContent = "???";}
document.getElementById('tableprogress').style = "width: 100%";
document.getElementById('number').textContent = "100%";
document.getElementById('tableprogress').style = "display: none;";
document.getElementById('tableload').style = "display: none;";
document.getElementById('imBLIND').style = "display: none;";
Materialize.showStaggeredList('#fancy')
}