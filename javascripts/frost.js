$(function() {
	$("#oomframe").dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: "clip",
			hide: "clip",
			speed: "fast",
			width: 790
		});
	$("#wguframe").dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: "clip",
			hide: "clip",
			speed: "fast",
			width: 790
		});
	$("#cppframe").dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: "clip",
			hide: "clip",
			speed: "fast",
			width: 790
		});
	$("#maincontent").accordion({
		heightStyle: "content",
		animate: "easeOutCubic"
	});	
	
	$("#headercontent").click(function(){
		$("#maincontent").accordion("option", "active" , 0);
	});
	
	$(".projtitle").click(function(){
		displayFull(this.id);
	});
});

$(document).ready(function() {
	drawSkills("skills");
	displayFull("oom");
});

function showDialog(id) {
	$("#"+id ).dialog("open");
}

function displayFull(id) {
	var idhtml = $("#"+id+"txtfull").html();
	$("#projectdetails").html(idhtml);
	$("h2.projtitle").removeClass("whiteonblue").addClass("blueonwhite");
	$("#"+id ).addClass("whiteonblue");
	$("#"+id+"screen").click(function(){
		showDialog(id+"frame");
	});
}

function drawSkills(parent) {
	var skills = ["Java","Ruby","JavaScript","PHP","Lua","C++","C#","Perl","MySQL","MongoDB","JSP","jQuery","GWT","AWS","Rails","Apex","CSS","Tomcat"];
	var exp = [/*"Java"*/5,/*"Ruby"*/3,/*"JavaScript"*/4,/*"PHP"*/4,/*"Lua"*/2,/*"C++"*/2,/*"C#"*/2,/*"Perl"*/2,/*"MySQL"*/4,/*"MongoDB"*/3,/*"JSP"*/1,/*"jQuery"*/4,/*"GWT"*/2,/*"AWS"*/1,/*"Rails"*/3,/*"Apex"*/2,/*"CSS"*/4,/*"Tomcat"*/1];

	var html = "";
	for (var i=0; i<skills.length; i++) {
		html += drawSkill(skills[i], exp[i]);
	}

	$("#"+parent).html(html);
}

function drawSkill(skill, exp) {
	var html = 	"<div class=\"skill\">"+
			    "<span class=\"skill_name\">"+skill+"</span>"+
				"<div class=\"skills_exp\">";
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
