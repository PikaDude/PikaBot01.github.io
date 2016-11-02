var arrowId = 0;
var arrowDirection = 1;
window.onload = function() {
document.getElementById('column' + arrowDirection).innerHTML = '<img id="movingArrow' + arrowDirection + '-' + arrowId + '" class="arrow" style="padding: 5px; float: left; position:absolute;" src="assets/images/Arrow-' + arrowDirection + '-3.png"></img>';
thang(arrowId);
arrowId++;
arrowDirection = Math.floor((Math.random() * 4) + 1);
}
function check(e) {
	//472
   if (e.key === "ArrowLeft") {
      document.getElementById('arrow1').src = "assets/images/Arrow-1-2.png"
	  if (document.getElementById('movingArrow0').getBoundingClientRect().top > -40 && document.getElementById('movingArrow0').getBoundingClientRect().top < 40)
	  {
		  console.log("good");
	  }
	  else
	  {
		  console.log(document.getElementById('movingArrow0').getBoundingClientRect().top);
	  }
	  setTimeout(function() {
      document.getElementById('arrow1').src = "assets/images/Arrow-1-1.png"
		}, 100);
   }
      if (e.key === "ArrowDown") {
      document.getElementById('arrow2').src = "assets/images/Arrow-2-2.png"
	  setTimeout(function() {
      document.getElementById('arrow2').src = "assets/images/Arrow-2-1.png"
		}, 100);
   }
   if (e.key === "ArrowUp") {
      document.getElementById('arrow3').src = "assets/images/Arrow-3-2.png"
	  setTimeout(function() {
      document.getElementById('arrow3').src = "assets/images/Arrow-3-1.png"
		}, 100);
   }
   if (e.key === "ArrowRight") {
      document.getElementById('arrow4').src = "assets/images/Arrow-4-2.png"
	  setTimeout(function() {
      document.getElementById('arrow4').src = "assets/images/Arrow-4-1.png"
		}, 100);
   }
}
function thang(id) {
	  $('#movingArrow' + id).animate({
      bottom: 1000,
      }, 2000, function() {
      });
}