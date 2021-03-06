<!-- JavaScript -->
		
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
		
<!-- jQuery local fallback -->
<script>window.jQuery || document.write('<script src="js/jquery/jquery-3.3.1.slim.min.js"><\/script>')</script>
		
<!-- Bootstrap JS local fallback -->
<script>if(typeof($.fn.modal) === 'undefined') {document.write('<script src="bootstrap/js/bootstrap.min.js"><\/script>')}</script>
		
<!-- Bootstrap CSS local fallback -->
<div id="bootstrapCssTest" class="hidden"></div>
<script type="text/javascript">
	if ($('#bootstrapCssTest').is(':visible') === true) {
		$('<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />').appendTo('head');
	}
</script>
		
<!-- Main JS -->
<script src="js/main.js"></script>