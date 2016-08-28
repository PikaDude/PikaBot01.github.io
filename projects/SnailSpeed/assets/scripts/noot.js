function notification(message, delay){
var audio = new Audio('assets/the-calling.mp3');
audio.play();
Materialize.toast(message, delay);
}