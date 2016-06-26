$(document).ready(function() {

//hide second lines of haiku
	$('#lineTwo').hide();
	$('#lineThree').hide();
	$('p.fadeInUp').hide();

//fade out the first haiku line

		$('#lineOne').fadeOut(4000, function() {
			//fade in line two background
			$('#lineTwo').fadeIn(0);
			//fade in animation of line two text
			$('.fadeInUp').fadeIn();

			//fade out line two and fade in line three
			$('#lineTwo').fadeOut(6000,function() {
				$('#lineThree').fadeIn(500);
			});	
		});	
});
