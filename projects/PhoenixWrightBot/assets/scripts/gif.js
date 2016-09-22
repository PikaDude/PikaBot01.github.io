function repeatGif() {
$('#exampleGif').prop('src', 'http://pikabot01.xyz/ImAlwaysWright/228101516672630784.gif')
}
window.onload = function() {
	repeatGif();
	document.getElementById('THESPINNER').innerHTML = '';
}