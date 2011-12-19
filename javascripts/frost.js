
$(function() {
	$( "#oomframe" ).dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: 'clip',
			hide: 'clip',
			speed: 'fast',
			width: 790
		});
	$( "#wguframe" ).dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: 'clip',
			hide: 'clip',
			speed: 'fast',
			width: 790
		});
	$( "#maincontent" ).accordion({
		autoHeight: false,
		navigation: true,
		collapsible: false,
		animated: 'bounceslide'
	});	
	
	$( "#expChart" ).mousemove(function(e){
		var y = $("#expChart").offset().top - e.pageY; 
		updateFromChart(y);
	});
	
});

function updateFromChart(pos) {
	var lang = "java";
	if (pos > 275 && pos <= 305) lang = "php";
	if (pos > 245 && pos <= 275) lang = "javascript";
	if (pos > 215 && pos <= 245) lang = "mysql";
	if (pos > 185 && pos <= 215) lang = "ajax";
	if (pos > 155 && pos <= 185) lang = "json";
	if (pos > 125 && pos <= 155) lang = "jquery";
	if (pos > 95 && pos <= 125) lang = "csharp";
	if (pos > 65 && pos <= 95) lang = "ror";
	if (pos > 35 && pos <= 65) lang = "perl";
	if (pos <= 35) lang = "jsp";
	setSliders(lang);
}

function displayFull(id) {
	var idhtml = $( '#'+id ).html();
	$( '#projectdetails' ).html(idhtml);
	$( 'h2.projtitle' ).removeClass("whiteonblue").addClass("blueonwhite");
	$( '#'+id+'heading' ).addClass("whiteonblue");
}

function openSummary() {
	$( '#maincontent' ).accordion( "activate" , 0 );
}

$(document).ready(function() {
	$.gchart.setDefaults({
		backgroundColor: '#e1e2ea',
		titleColor: '#081530'
	});
	$( '#sourceChart' ).gchart({
		type: 'pie',
		title: 'Experience distribution',
		pieOrientation: 108,
		legend: 'right',
		legendColor: '#081530',
		legendSize: 16,
		extension: {chdl: 'work|school|personal'},
		series: [$.gchart.series('Source', [33, 133, 34],['#f5f50a','#00c400','#c40000'])]
	});
	$( '#expChart' ).gchart({
		type: 'barHorizGrouped',
		title: 'Experience amount|(relative to Java)',
		margins: 15,
		axes: [$.gchart.axis(
				'left', 
				['jsp','perl','ror','c#','jquery','json','ajax','mysql','javascript','php','java']
				,'#081530',16)],
		series: [$.gchart.series('Amount',[100,85,95,90,85,75,80,15,40,20,30],'#8c9fdc')]
	});
	displayFull("oomtxt");
});

function oom() {
	$( "#oomframe" ).dialog('open');
}

function wgu() {
	$( "#wguframe" ).dialog('open');
}

function updateChart(w, s, p, c) {
	setTimeout(function(){$('#sourceChart').gchart('change', 'pieOrientation', s);}, 25);
	$('#sourceChart').gchart('change', 'series', [$.gchart.series('Source', [w, s, p],['#f5f50a','#00c400','#c40000'])]);
	var color = ['#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc','#8c9fdc'];
	color[c] = '#173db9';
	$('#expChart').gchart('change', 'series', [$.gchart.series('Amount',[100,85,95,90,85,75,80,15,40,20,30],color)]);
}

function setSliders(lang) {
	var pieArray = new Array(); 
	if (lang == "java") pieArray = [10,35,55,0];
	if (lang == "php") pieArray = [60,0,40,1];
	if (lang == "javascript") pieArray = [35,20,45,2];
	if (lang == "mysql") pieArray = [45,10,45,3];
	if (lang == "ajax") pieArray = [35,20,45,4];
	if (lang == "json") pieArray = [50,15,35,5];
	if (lang == "jquery") pieArray = [45,5,50,6];
	if (lang == "csharp") pieArray = [0,0,100,7];
	if (lang == "ror") pieArray = [80,0,20,8];
	if (lang == "perl") pieArray = [0,97,3,9];
	if (lang == "jsp") pieArray = [0,25,75,10];
	updateChart(pieArray[0], pieArray[1], pieArray[2], pieArray[3]);
	$( ".langtech" ).css("color", "#8c9fdc");
	$( "#"+lang ).css("color", "#173db9");
	$( "#summarytxt" ).html(getSummary(lang));

}

function getSummary(lang) {
	var html = "";
	if (lang == "java") html = "My acedemics are focused largely on Java, and it's also used extensively in various personal " +
			"trading applications, though only slightly at work, typically for small non-web based projects";
	if (lang == "php") html = "For web based projects this is my most often used server side language, " +
			"particularly at work due to ease of deployment and integration";
	if (lang == "javascript") html = "JavaScript will probably be the most important language of the next decade, " +
			"I've been using it more powerfully with each new project to create a feel more like an application than a web page";
	if (lang == "csharp") html = "Primarily used C# to create an automated trading application that could easily interact " +
			"with my brokerage's API. This was eventually abandoned in favor of a re-write in Java and using the FIX protocol to place trades";
	if (lang == "ror") html = "My first app put into production was written in RoR.  I always enjoy learning new languages, " +
			"but getting into RoR was great because "+
			"<a href='http://railsforzombies.org/' target='_blank'><span class='atext'>Rails for Zombies</span></a>"+
			" is by far the most entertaining way to learn a new language";
	if (lang == "perl") html = "Thus far used almost entirely for school with only the occasional " +
			"non-academic use.  Though learning Perl has greatly helped with my use of REGEX in every other language";
	if (lang == "jsp") html = "I really enjoy coding in Java, so I was excited to expirement with JSP, but sadly I haven't had the " +
			"opportunity to work with it on larger sized projects yet";
	if (lang == "mysql") html = "Nearly every project I've worked on has involved accessing MySQL databases";
	if (lang == "ajax") html = "AJAX is used in nearly everything web related I code as " +
			"it's critical to transition the feel from web-page to web-app";
	if (lang == "json") html = "Given the choice I use JSON whenever possible, as it's rare when " +
			"using XML would offer a significant benefit";
	if (lang == "jquery") html = "A lot of my earlier JavaScript work was done without the aid of a framework.  Eventually I " +
			"played around with both Dojo and jQuery before deciding jQuery was the better choice";
	return html;
}
