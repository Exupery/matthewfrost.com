$(function() {
	$(".screenshotframe").dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: "blind",
			hide: "blind",
			speed: "fast",
			closeOnEscape: true,
			width: "auto",
			height: "auto"
		});

	$(".screenshot").click(function(event) {
		event.stopPropagation();
    showDialog(this.id+"-frame");
  });

	$(".screenshotframe").click(function(event) {
    hideDialog(this.id);
  });

	$("#main, #projects").tabs({
		heightStyle: "content",
		animate: "easeOutCubic"
	});

	$(".button").on("click", function() {
  	ga("send", "event", "button", this.id);
	});

});

function showDialog(id) {
	$("#"+id).dialog("open");
	$("body").click(function() {
    hideDialog(id);
  });
	ga("send", "event", "dialog", id);
}

function hideDialog(id) {
	$("#"+id).dialog("close");
}
