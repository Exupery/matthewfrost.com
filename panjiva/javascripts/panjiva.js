var lastMove = 0;
var xPrevDist = 250;
var yPrevDist = 250;
var width = Number.MAX_VALUE;
var height = Number.MAX_VALUE;

$(document).ready(function() {
	$('button').button();
	width = $(document).width() - $('#btn').width();
	height = $(document).height() - $('#btn').height();
});

$(function() {
	$('html').mousemove(function(event) {
		var btnPos = $('#btn').position(); 
		var xDist = btnPos.left - event.pageX;
		var yDist = btnPos.top - event.pageY;
		var moveX = distanceModifier(xDist);
		var moveY = distanceModifier(yDist);
		var newX = (xDist > 0) ? btnPos.left + moveX : btnPos.left - moveX;
		var newY = (yDist > 0) ? btnPos.top + moveY : btnPos.top - moveY;
		if ( ((xDist > 0 && xPrevDist > xDist) && ((yDist >= 0 && yPrevDist >= yDist) || (yDist <= 0 && yPrevDist <= yDist)))
			|| ((xDist < 0 && xPrevDist < xDist) && ((yDist >= 0 && yPrevDist >= yDist) || (yDist <= 0 && yPrevDist <= yDist))) ) {
//			var timeCheck = event.timeStamp - lastMove;
			if (newX < 50) newX = width;
			if (newY < 50) newY = 0;
			if (newX > width) newX = 0;
			if (newY > height) newY = 0;
			$('#btn').css({left: newX, top: newY});
		}
		xPrevDist = xDist;
		yPrevDist = yDist;
	});
});

function distanceModifier(distance) {
	var px =  0;
	if (distance < 25) {
		px = 150;
	} else if (distance >= 25 && distance < 50) {
		px = 75;
	} else if (distance >= 50 && distance < 125) {
		px = 25;
	} else if (distance >= 125 && distance < 250) {
		px = 5;
	} else {
		px = 1;
	}
	return px;
}
