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
	$("#maincontent").accordion({
		heightStyle: "content",
		animate: "easeOutCubic"
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
	drawSkills("skills");
	displayFull("sif");
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
		["Ruby",4],
		["JavaScript",4],
		["Scala",3],
		["PHP",4],
		["Lua",2],
		["C++",2],
		["C#",1],
		["Perl",1],
		["MySQL",5],
		["MongoDB",3],
		["Redis",2],
		["jQuery",4],
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
	var html = 	"<div class=\"skill\">"+
			    "<span class=\"skill-name\">"+skill+"</span>"+
				"<div class=\"skills-exp\">";
	for (var i=0; i<5; i++) {
		if (exp > i) {
			html += "<div class=\"box filled\"></div>"
		} else {
			html += "<div class=\"box\"></div>"
		}
	}
	html += "</div></div>";
	return html;						
}
