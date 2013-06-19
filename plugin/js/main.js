$(function() {
	
	var $mobileInput = $(".mobile-input"),
		$clearInput = $('<i class="ios-input-clear">');
	
	$mobileInput.wrap('<div class="ios-input-wrapper" title="Очистить">');
	$mobileInput.addClass('ios-input');
	$mobileInput.after($clearInput);
	
	
	$clearInput.on('click', function() {
		
		$clearInput.removeClass('active');
		$mobileInput.val('');
		$mobileInput.focus();	
		
	});
	
	$mobileInput.on('keyup', function() {
		
		if($mobileInput.length > 0) {
			$clearInput.addClass('active');
		} else {
			$clearInput.removeClass('active');
		}
		
	});
	
});
