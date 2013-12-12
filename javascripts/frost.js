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

$(document).ready(function() {
	drawSkills("skills-boxes");
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

function drawSkills(parent) {
	var skills = [
		["Java",5],
		["Scala",4],
		["Ruby",3],
		["PHP",3],
		["C++",2],
		["JavaScript",4],
		["Lua",2],
		["Perl",1],
		["MySQL",5],
		["PostgreSQL",2],
		["MongoDB",3],
		["Redis",2],
		["Play",2],
		["Rails",3]
	];
	var html = "";
	for (var i=0; i<skills.length; i++) {
		html += drawSkill(skills[i][0], skills[i][1]);
	}

	$("#"+parent).html(html);
}

function drawSkill(skill, exp) {
	var html = 	"<div class=\"skill inline\">"+
			    "<div class=\"skill-name\">"+skill+"</div>"+
				"<div class=\"skills-xp\">";
	for (var i=0; i<5; i++) {
		if (exp > i) {
			html += "<div class=\"inline box filled\"></div>"
		} else {
			html += "<div class=\"inline box\"></div>"
		}
	}
	html += "</div></div>";
	return html;						
}
