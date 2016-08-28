var old = "";
function notification(message, delay){
if (message === old) return;
old = message;
var audio = new Audio('assets/the-calling.mp3');
audio.play();
Materialize.toast(message, delay);
}