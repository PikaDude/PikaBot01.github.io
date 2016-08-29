var old = "";
function notification(message, delay){
if (message === old) return;
old = message;
var audio = new Audio('assets/the-calling.mp3');
audio.play();
Materialize.toast(message, delay);
}
function joel(id){
	if (id === "superdeathsword")
	{
		Materialize.toast("OH THERES A BURNING SUPER DEATH SWORD!!!", 5000);
		document.getElementById('sadcena').innerHTML = '<style type="text/css">body, a:hover {cursor: url(http://cur.cursors-4u.net/sports/spo-1/spo16.ani), url(http://cur.cursors-4u.net/sports/spo-1/spo16.png), progress !important;}</style><a href="http://www.cursors-4u.com/cursor/2005/05/08/spo16-12.html" target="_blank" title="OH THERES A BURNING SUPER DEATH SWORD"><img src="http://cur.cursors-4u.net/cursor.png" border="0" alt="Flame Sword" style="position:absolute; top: 0px; right: 0px;" /></a>';
		var audio = new Audio('assets/sword.mp3');
		audio.play();
	}
}