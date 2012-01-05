function resizeFont() {
	var windowHeight;
	if (window.innerHeight != null) windowHeight = window.innerHeight;
	else windowHeight = document.body.clientHeight;
	document.body.style.fontSize = windowHeight / 9;
};
window.onload = resizeFont;

var sloans = ["C", "D", "H", "K", "N", "O", "R", "S", "V", "Z"];

$(document).ready(function() {
	$("#shuffle").click(function() {
		$(".line").each(function(i) {
			$(this).html(createLine(i));
		});
	});
});

function createLine(numChars) {
	var str = ""; 
	var maxLength = (numChars < 8) ? numChars : 7;
	var shuffled = shuffleSloans();
	for (var i = 0; i <= maxLength; i++) {
		str += (shuffled[i] + " ");
	}
	return str;
}

function shuffleSloans() {
/* use Fisher-Yates shuffle to randomize array */
	var shuf = new Array();
	var sloansCopy = sloans.slice(0);
	for (var i = sloans.length-1; i > 0; i--) {
		var j = parseInt(Math.random() * i);
		shuf[i-1] = sloansCopy.splice(j, 1);
	}
	return shuf;
}

$(window).resize(function() {
	resizeFont();
});
