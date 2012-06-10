$(function() {
	$( '#oomframe' ).dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: 'clip',
			hide: 'clip',
			speed: 'fast',
			width: 790
		});
	$( '#wguframe' ).dialog({
			autoOpen: false,
			draggable: false,
			resizable: false,
			show: 'clip',
			hide: 'clip',
			speed: 'fast',
			width: 790
		});
	$( '#maincontent' ).accordion({
		autoHeight: false,
		navigation: true,
		collapsible: false,
		animated: 'bounceslide'
	});	
	
	$( '#headercontent' ).click(function(){
		$( '#maincontent' ).accordion( 'activate' , 0 );
	});
	
	$( ".projtitle" ).mouseover(function(){
		displayFull(this.id);
	});
	
});

function displayFull(id) {
	var idhtml = $( '#'+id+'full' ).html();
	$( '#projectdetails' ).html(idhtml);
	$( 'h2.projtitle' ).removeClass('whiteonblue').addClass('blueonwhite');
	$( '#'+id ).addClass('whiteonblue');
}

$(document).ready(function() {
	$.gchart.setDefaults({
		backgroundColor: '#e1e2ea',
		titleColor: '#081530'
	});
	displayFull("oomtxt");
});

function oom() {
	$( '#oomframe' ).dialog('open');
}

function wgu() {
	$( '#wguframe' ).dialog('open');
}
