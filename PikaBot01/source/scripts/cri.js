$(window).focus(function() {
	var oldtitle = document.getElementById('name').textContent;
	document.getElementById('title').textContent = oldtitle;
});

$(window).blur(function() {
    document.getElementById('title').textContent = "i see you";
});