(function ($) {
	
	$.fn.smartForm = function(options) {
		
		var settings = $.extend(true, $.fn.smartForm.defaults, options);
		
		return this.each(function() {
			
			settings.beforeCreate.call(this);
			
			var $el = $(this);
			
			if($el.data('input')) {
				return $el;
			}
			
			buildLayout($el);
			
			$el.data('clearBtn').on('click', function() {
				clearInput($el);
				hideClearBtn($el);
			});
			
			$el.on('keyup blur focus input', function() {
				if($el.val().length > settings.field.minCharsCount) {
					showClearBtn($el);
				} else {
					hideClearBtn($el);
				}
			});
			
			settings.afterCreate.call(this);
			
		});
		
		function buildLayout($input) {
			
			$input.data('clearBtn', $('<i>').addClass(settings.clearBtn.class).attr('title', settings.clearBtn.title));
			
			$input
				.addClass(settings.field.class)
				.wrap($('<div>').addClass(settings.container.class))
				.after($input.data('clearBtn'));
			
		}
		
		function showClearBtn($input) {
			
			if(!$input.data('clearBtn').hasClass(settings.clearBtn.activeClass)) {
				$input.data('clearBtn').addClass(settings.clearBtn.activeClass);
			}

		}
		
		function hideClearBtn($input) {
			
			if($input.data('clearBtn').hasClass(settings.clearBtn.activeClass)) {
				$input.data('clearBtn').removeClass(settings.clearBtn.activeClass);
			}
			
		}
		
		function clearInput($input) {
			
			$input
				.val('')
				.focus();

		}

	};
	
	$.fn.smartForm.defaults = {
		field: {
			class: 'ios-input',
			minCharsCount: 3
		},
		container: {
			class: 'ios-input-wrapper'
		},
		clearBtn: {
			title: 'Очистить',
			class: 'ios-input-clear',
			activeClass: 'active'
		},
		beforeCreate: function() {
			console.log("Start");
		},
		afterCreate: function() {
			console.log("Finish");
		}
	};
	
	
	
	$.fn.smartTel = function(options) {
		
		var settings = $.extend(true, $.fn.smartTel.defaults, options);
		
		return this.each(function() {
			
			var $el = $(this),
				tel = $el.data('tel');
			
			$el.wrap($('<a>').attr('href', 'tel:' + tel + ''));	
			
		});
	}
	
	$.fn.smartTel.defaults = {
		
	}

	
}(jQuery));



$(function() {
	
	$(".smart-input").smartForm({
		clearBtn: {
			title: 'Очистить поле ввода'
		}
	});
	
	$(".tel").smartTel({
		
	});
	
});

