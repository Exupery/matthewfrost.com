var lastMove = 0;
var lastDistance = 0.1;
var lastDiff = 0.1;
var xPrevDist = 250;
var yPrevDist = 250;

$(document).ready(function() {
	$('button').button();
});

$(function() {
	$('html').mousemove(function(event) {
		var btnPos = $('#btn').offset(); //position
		var xDist = btnPos.left - event.pageX;
		var yDist = btnPos.top - event.pageY;
		var moveX = 1;
		var moveY = 1;
		var timeCheck = event.timeStamp - lastMove;
		//if (xDist > 0) console.log((xDist > 0)+" "+xDist);
		//if (yDist > 0) console.log((yDist > 0)+" "+yDist);
		var newX = (xDist > 0) ? btnPos.left + moveX : btnPos.left - moveX;
		var newY = (yDist > 0) ? btnPos.top + moveY : btnPos.top - moveY;
//		console.log(" xDist "+xDist+" btnPos.left "+btnPos.left+" moveX "+moveX+" newX "+newX);
//		console.log(" xDist "+xDist+" xPrevDist "+xPrevDist+" yDist "+yDist+" yPrevDist "+yPrevDist);//+" "+btnPos.left+" "+btnPos.top);
		if (((xDist > 0 && xPrevDist > xDist) && ((yDist >= 0 && yPrevDist >= yDist) || (yDist <= 0 && yPrevDist <= yDist)))
			|| ((xDist < 0 && xPrevDist < xDist) && ((yDist >= 0 && yPrevDist >= yDist) || (yDist <= 0 && yPrevDist <= yDist))) 
			|| ((yDist > 0 && yPrevDist > yDist) && ((xDist >= 0 && xPrevDist >= xDist) || (xDist <= 0 && xPrevDist <= xDist)))
			|| ((yDist < 0 && yPrevDist < yDist) && ((xDist >= 0 && xPrevDist >= xDist) || (xDist <= 0 && xPrevDist <= xDist)))
			) {
//			if (timeCheck > 250 ) {
				lastMove = event.timeStamp;
				console.log("before left: "+$('#btn').css("left"));
				$('#btn').offset({left: newX, top: newY});
				console.log("after left: "+$('#btn').css("left"));
//			}
		}
//		console.log(xDist+" "+yDist+" "+xPrevDist+" "+yPrevDist+" "+btnPos.left+" "+btnPos.top);
//		if (timeCheck > 25 ) {
			xPrevDist = xDist;
			yPrevDist = yDist;
//		}
		
	});
});
	
//function mouseMoved(dir, distance) {
//	var btnPos = $('#btn').position();		
//	//var string = 'pageX: '+ mouseX +' pageY: '+ mouseY +' btnLeft: '+ btnPos.left +' btnTop: '+ btnPos.top;
//	//console.log(string);
//	var width = $(document).width();
//	var height = $(document).height();
//	var moveX = (distance < 150) ? (width / 10) - distance: Math.random() * 50;
//	var moveY = (distance < 150) ? (height / 10) - distance: Math.random() * 50;
//	//var dir = 1;//Math.random(); //use same direction for X & Y to prevent excessive jumpiness
//	//var string = mouseY+' '+moveY+' '+mouseX+' '+moveX+' '+width+' '+height;
//	//console.log(string);
//	//var dir = 1;//Math.random();
//	var newX = (dir > 0.5) ? btnPos.left + moveX : btnPos.left - moveX;
//	var newY = (dir > 0.5) ? btnPos.top + moveY : btnPos.top - moveY;
//	if (newY > height - 50 || newX > width - 25) {
//		newX = moveX;
//		newY = moveY;
//	} else if (newY < 15 || newX < 15) {
//		newX = width - moveX;
//		newY = height - moveY;
//	}
//	$('#btn').css({left: newX, top: newY});
//}

function distanceModifier(distance) {
	return $(document).width() * 100 / distance;
}
