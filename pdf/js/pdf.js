$(document).ready(function() {
	$('#download_button').hide();
});

$('#reset').click(function() {
	$('#textbox').val('');
	$('#textbox').focus();
	$('#download_button').hide();
});

$('#convert').click(function() {
	var params = 'txt=' + $('#textbox').val();
	$.ajax({
	  url: 'pdf.php',
	  type: 'POST',
	  data: params,
	  success: function(response){
	  	if (response.length > 0) {
	  		var path = 'files/' + response;
			$('#download_link').attr('href', path);
	  		$('#download_button').show();
	  		$('#download_button').html('Download file ' + response);	  		
		} else {
			alert('No text entered!');
		}
	  }
	});
});
