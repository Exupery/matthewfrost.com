var lastMove = 0;
var xPrevDist = 250;
var yPrevDist = 250;
var width = Number.MAX_VALUE;
var height = Number.MAX_VALUE;

$(document).ready(function() {
	$('button').button();
	$('button').click(function() {alert("You clicked me!");});
	width = $(document).width() - $('#btn').width();
	height = $(document).height() - $('#btn').height();
});

$(function() {
	$('html').mousemove(function(event) {
		var btnPos = $('#btn').position(); 
		var xDist = btnPos.left - event.pageX;
		var yDist = btnPos.top - event.pageY;
		if (event.timeStamp - lastMove > delay(Math.min(Math.abs(xDist), Math.abs(yDist)))) {
			var moveX = distanceModifier(xDist);
			var moveY = distanceModifier(yDist);
			var newX = (xDist > 0) ? btnPos.left + moveX : btnPos.left - moveX;
			var newY = (yDist > 0) ? btnPos.top + moveY : btnPos.top - moveY;
			if (((xDist > 0 && xPrevDist > xDist) && ((yDist > 0 && yPrevDist > yDist) || (yDist < 0 && yPrevDist < yDist)))
				|| ((xDist < 0 && xPrevDist < xDist) && ((yDist > 0 && yPrevDist > yDist) || (yDist < 0 && yPrevDist < yDist))) ) {
				lastMove = event.timeStamp;
				if (newX < 50) {
					newX = width - (width/10);
				}
				if (newY < 50) {
					newY = height - (height/10);
				}
				if (newX > width) {
					newX = 0 + (width/10);
				}
				if (newY > height) {
					newY = 0 + (height/10);
				}
				$('#btn').css({left: newX, top: newY});
			}
			xPrevDist = xDist;
			yPrevDist = yDist;
		}
	});
});

function delay(distance) {
	if (distance < 100) {
		return 0;
	} else {
		return Math.min(distance, 1000);
	}
}

function distanceModifier(distance) {
	var px =  0;
	if (distance < 25) {
		px = 75;
	} else if (distance < 125) {
		px = 25;
	} else if (distance < 250) {
		px = 5;
	} else if (distance < (width / 2)) {
		px = 1;
	}
	return px;
}
