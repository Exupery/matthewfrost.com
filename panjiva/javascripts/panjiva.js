var lastMove = 0;

$(document).ready(function() {
	$('button').button();
});

$(function() {
	$('html').mousemove(function(event){
		var timeCheck = event.timeStamp - lastMove;
		if (timeCheck > 25) {
			mouseMoved(event.pageX, event.pageY);
			lastMove = event.timeStamp;
		}
	});
});
	
function mouseMoved(mouseX, mouseY) {
	var btnPos = $('#btn').position();		
	//var string = 'pageX: '+ mouseX +' pageY: '+ mouseY +' btnLeft: '+ btnPos.left +' btnTop: '+ btnPos.top;
	//console.log(string);
	var foo = $(document).height();
	var bar = $(document).width();
	var distance = Math.min(Math.abs(btnPos.left-mouseX), Math.abs(btnPos.top-mouseY));
	//var distanceModifier = distance / 
	var newX = mouseX + ($(document).width() * 100 / distance);
	var newY = mouseY + ($(document).height() * 100 / distance);
	$('#btn').css({left: newX, top: newY});
}

function distanceModifier(distance) {
	return $(document).width() * 100 / distance;
}
