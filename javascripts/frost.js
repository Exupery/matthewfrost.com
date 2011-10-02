
$(function() {
	$( "#oomframe" ).dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: 'clip',
			hide: 'clip',
			width: 680
		});
	$( "#maincontent" ).accordion({
		autoHeight: false,
		navigation: true,
		collapsible: true,
		animated: 'bounceslide'
	});		
});

$(document).ready(function() {
	$.gchart.setDefaults({
		backgroundColor: '#000000',
		titleColor: '#FFFFFF'
	});
	$( '#sourceChart' ).gchart({
		type: 'pie',
		title: 'Experience distribution',
		pieOrientation: 108,
		legend: 'right',
		legendColor: '#FFFFFF',
		legendSize: 16,
		extension: {chdl: 'work|school|personal'},
		series: [$.gchart.series('Source', [33, 133, 34],['#3db918','#173db9','#b9173d'])]
	});
	$( '#expChart' ).gchart({
		type: 'barHorizGrouped',
		title: 'Experience amount|(relative to Java)',
		margins: 15,
		axes: [$.gchart.axis(
				'left', 
				['jsp','perl','ror','c#','jquery','json','ajax','mysql','javascript','php','java']
				,'#FFFFFF',16)],
		series: [$.gchart.series('Amount',[100,85,95,90,85,75,80,15,25,20,30],'#c8eed0')]
	});
});

function oom() {
	$( "#oomframe" ).dialog('open');
}

function updateChart(w, s, p, c) {
	setTimeout(function(){$('#sourceChart').gchart('change', 'pieOrientation', s);}, 25);
	$('#sourceChart').gchart('change', 'series', [$.gchart.series('Source', [w, s, p],['#3db918','#173db9','#b9173d'])]);
	var color = ['#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0','#c8eed0'];
	color[c] = '#faff61';
	$('#expChart').gchart('change', 'series', [$.gchart.series('Amount',[100,85,95,90,85,75,80,15,25,20,30],color)]);
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
	$( ".langtech" ).css("color", "#c8eed0");
	$( "#"+lang ).css("color", "#faff61");
	$( "#summarytxt" ).html(getSummary(lang));

}

function getSummary(lang) {
	var html = "";
	if (lang == "java") html = "My schooling is focused largely on Java, and it's also used extensively in various personal " +
			"trading applications, though only slightly at work";
	if (lang == "php") html = "For web based projects this is my most often used server side language, " +
			"particularly at work due to ease of deployment";
	if (lang == "javascript") html = "JavaScript will probably be the most important language of the next decade, " +
			"I've been using it more powerfully with each new project so they feel more like an app and less like a web page";
	if (lang == "csharp") html = "Primarily used C# to create an automated trading application that could easily interact " +
			"with my brokerage's API. This was eventually abandoned in favor of a Java app using the FIX protocol";
	if (lang == "ror") html = "My first app put into production was written in RoR (later re-written in PHP).  I wasn't " +
			"crazy about RoR, but I will say "+
			"<a href='http://railsforzombies.org/' target='_blank'><span class='hotel'>Rails for Zombies</span></a>"+
			" is by far the most entertaining way to learn a language";
	if (lang == "perl") html = "Thus far used almost entirely for school with only the occasional " +
			"non-academic use";
	if (lang == "jsp") html = "I love Java, so I was excited to expirement with JSP, but sadly I haven't had the opportunity  " +
			"to work with it on a large sized project yet";
	if (lang == "mysql") html = "Nearly every project I've worked on has involved utlizing a MySQL database";
	if (lang == "ajax") html = "AJAX is used in nearly everything web related I code, " +
			"it's a critical tool to go from web-page to web-app";
	if (lang == "json") html = "Given the choice I use JSON whenever possibel, except in the rare cases where " +
			"using XML would offer a significant benefit";
	if (lang == "jquery") html = "A lot of my earlier JavaScript work was done without the aid of a framework.  Eventually I " +
			"played around with both Dojo and jQuery before deciding jQuery was the better choice";
	return html;
}