var lastMove = 0;
var lastDistance = 0.1;
var lastDiff = 0.1;

$(document).ready(function() {
	$('button').button();
});

$(function() {
	$('html').mousemove(function(event){
		var timeCheck = event.timeStamp - lastMove;
		var btnPos = $('#btn').position();
		var distance = Math.min(Math.abs(btnPos.left-event.pageX), Math.abs(btnPos.top-event.pageY));
		var diff = Math.abs(distance - lastDistance) / Math.min(distance, lastDistance);
		//console.log(distance+" "+diff);
		if (distance < 25 || (distance < lastDistance && (diff > 0.25 || timeCheck > 200))) {
			mouseMoved(event.pageX, event.pageY, distance);
			lastMove = event.timeStamp;
			//console.log(" move ");
		}
		lastDistance = distance;
	});
});
	
function mouseMoved(mouseX, mouseY, distance) {
	var btnPos = $('#btn').position();		
	//var string = 'pageX: '+ mouseX +' pageY: '+ mouseY +' btnLeft: '+ btnPos.left +' btnTop: '+ btnPos.top;
	//console.log(string);
	var width = $(document).width();
	var height = $(document).height();
	var moveX = (distance < 150) ? (width / 10) : Math.random() * 50;
	var moveY = (distance < 150) ? (height / 10) : Math.random() * 50;
	var dir = 1;//Math.random(); //use same direction for X & Y to prevent excessive jumpiness
	var string = mouseY+' '+moveY+' '+mouseX+' '+moveX+' '+width+' '+height;
	console.log(string);
	if (mouseY + moveY > height - 125 || mouseX + moveX > width - 125) {
		console.log(">");
		dir = 0;
		console.log(dir);
	} else if (mouseY - moveY < 50 || mouseX - moveX < 50) {
		console.log("<");
		dir = 1;
		console.log(dir);
	}
	var newX = (dir > 0.5) ? mouseX + moveX : mouseX - moveX;
	var newY = (dir > 0.5) ? mouseY + moveY : mouseY - moveY;
	$('#btn').css({left: newX, top: newY});
}

function distanceModifier(distance) {
	return $(document).width() * 100 / distance;
}
