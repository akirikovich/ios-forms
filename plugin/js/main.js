(function ($) {
	
	$.fn.iosForms = function(options) {
		
		var settings = $.extend(true, $.fn.iosForms.defaults, options);
		
		return this.each(function() {
			
			settings.beforeCreate.call(this);
			
			var $el = $(this);
			
			if($el.data('input')) {
				return $el;
			}
			
			buildLayout($el);
			
			$el.data('clearBtn').on('click', function() {
				
				var $clearBtn = $(this);
				
				$clearBtn.removeClass(settings.clearBtn.activeClass);
				$el
					.val('')
					.focus();
				
			});
			
			$el.on('keyup', function() {

				if($el.val().length > 0 && !$el.data('clearBtn').hasClass(settings.clearBtn.activeClass)) {
					$el.data('clearBtn').addClass(settings.clearBtn.activeClass);
				} else if(!$el.data('clearBtn').hasClass(settings.clearBtn.activeClass)) {
					$el.data('clearBtn').removeClass(settings.clearBtn.activeClass);
				}

			});
			
			settings.afterCreate.call(this);
			
		});
		
		function buildLayout($el) {
			
			$el.data('clearBtn', $('<i>').addClass(settings.clearBtn.class).attr('title', settings.clearBtn.title));
			
			$el
				.addClass(settings.field.class)
				.wrap($('<div>').addClass(settings.container.class))
				.after($el.data('clearBtn'));
			
		}

	};
	
	$.fn.iosForms.defaults = {
		field: {
			class: 'ios-input'
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

	
}(jQuery));



$(function() {
	
	$(".mobile-input").iosForms({
		clearBtn: {
			title: 'Очистить поле ввода'
		}
	}).css('border-color', '#DDD');
	
});

