$(document).ready(function() {
	$('button').button();
});

$(function() {
	$('html').mousemove(function(event){
		mouseMoved(event.pageX, event.pageY);
	});
});
	
function mouseMoved(x, y) {
	var btnPos = $('#btn').position();		
	var string = 'pageX: '+ x +' pageY: '+ y +' btnLeft: '+ btnPos.left +' btnTop: '+ btnPos.top;
	console.log(string);
}
