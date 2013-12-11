$(function() {
	$(".screenshotframe").dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: "clip",
			hide: "clip",
			speed: "fast",
			closeOnEscape: true,
			width: 790,
			height: "auto",
			title: "X"
		});

	$("#content").tabs({
		heightStyle: "content",
		animate: "easeOutCubic"
	});	

	$(".nav a").focus(function() {
		$(this).blur();
	});
	
	$("#headercontent").click(function(){
		$("#maincontent").accordion("option", "active" , 0);
	});
	
	$(".sect_head").on("click", function() {
  		ga("send", "event", "section_nav", this.id);
	});

	$(".projtitle").click(function(){
		displayFull(this.id);
		ga("send", "event", "project_disp", this.id);
	});
});

$(document).ready(function() {
	drawSkills("skills-boxes");
	/*displayFull("sif");*/
});

function showDialog(id) {
	$("#"+id).dialog("open");
	$("#"+id).click(function(event) {
		event.stopPropagation();
	});	
	ga("send", "event", "dialog_open", id);
}

function hideDialog(id) {
	$("#"+id).dialog("close");
}

function displayFull(id) {
	var idhtml = $("#"+id+"txtfull").html();
	$("#projectdetails").html(idhtml);
	$("h2.projtitle").removeClass("whiteonblue").addClass("blueonwhite");
	$("#"+id ).addClass("whiteonblue");
	$("body").click(function() {
		hideDialog(id+"frame");
	});
	$("#"+id+"screen").click(function(event) {
		event.stopPropagation();
		showDialog(id+"frame");
	});
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
