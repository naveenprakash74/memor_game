function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
	  game_over()
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var time_in_minutes = 4;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);

initializeClock('clockdiv', deadline);




var Image=['badminton.png','badminton_PNG10446.png','ball.png','bat.png','Captain_America_Shield.png',
	'diece.png','football.png','gloves.png','halmet.png','hockey.png',
	'iron_man.png','ironman.png','stamp.png','table-tennis.png','black.png','badminton.png','badminton_PNG10446.png','ball.png','bat.png','Captain_America_Shield.png',
	'diece.png','football.png','gloves.png','halmet.png','hockey.png',
	'iron_man.png','ironman.png','stamp.png','table-tennis.png','black.png'];
	
	
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(Image);

var x = document.getElementsByClassName("move");
	x[0].innerHTML = "0";

var counter=0,a1,a2,move=0,c=0,verified_Image=[];
function ImageChange(id){
	counter++;
	move++;
	var x = document.getElementsByClassName("move");
	x[0].innerHTML = move;
	document.getElementById("pop-move").innerHTML=move;
	if(counter==1){
	a1=id;
	document.getElementById(id).src=Image[id];}
	else if(counter==2){
		a2=id; 
		document.getElementById(id).src=Image[id];
		if(Image[a1]!==Image[a2]){
			Change(a1,a2);
			}
		else{
			verified_Image.push(Image[a1]);
			c++;
		}
		counter=0;
		a1=0;
		a2=0;
		}
	else{
		counter=0;a1=0;a2=0;
	}
	if(c==15){
		pop_winner();
	}
	
}
function Change(p,o){
	setTimeout(function(){document.getElementById(p).src='ffc300.png';document.getElementById(o).src='ffc300.png';},1000);
	}
	
	
	
function pop_winner(){	
// Get the modal
document.getElementById("pop-header").innerHTML="Congratulation_You_are_winner";
var minutes = Number(document.getElementsByClassName("minutes")[0].innerHTML);
var second = Number(document.getElementsByClassName("seconds")[0].innerHTML);
minutes=4-minutes;
second=60-second;
document.getElementById("pop-time").innerHTML=minutes+" minutes "+second+" sec";

var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var restart = document.getElementsByClassName("pop-restart")[0];
modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}
restart.onclick = function() {
  modal.style.display = "none";
  location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	location.reload();
  }
}
}	
	
	
	
	
function game_over(){	
// Get the modal
document.getElementById("pop-header").innerHTML="Game over";
var minutes = Number(document.getElementsByClassName("minutes")[0].innerHTML);
var second = Number(document.getElementsByClassName("seconds")[0].innerHTML);
document.getElementById("pop-time").innerHTML=minutes+" minutes "+second+" sec";

var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var restart = document.getElementsByClassName("pop-restart")[0];
modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}
restart.onclick = function() {
  modal.style.display = "none";
  location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	location.reload();
  }
}
}