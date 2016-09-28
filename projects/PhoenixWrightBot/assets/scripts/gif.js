function repeatGif() {
$('#exampleGif').prop('src', 'assets/images/objection.gif')
}
window.onload = function() {
	repeatGif();
	document.getElementById('THESPINNER').innerHTML = '';
}