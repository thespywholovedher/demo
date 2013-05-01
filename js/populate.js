/*
*	@author Ahmal Jones
*	@verison 0.0.1
*	@date 2/12/2013
*/
"use strict";

$(document).ready(function() {


		
	//$('body').css({backgroundColor: '#1B1A18'});

	//$$.document.append(ele).append(ele2, '#element');

	//----------------TEST CODE--------------------------//

	var blockPrototype = $$({
		model: {},
		view: {
			format: $('#block-format').html()
		},
		controller: {
			// Fades out on destruction
			'click &': function () {
				var self = this;
				this.view.$().fadeOut('slow', function() { self.destroy() });
			},
			// Fades in on creation
			'create': function () {

				this.view.$().animate({opacity: 'toggle'}, 'slow');
			}
		}
	});

	/*	
	var button = $$({
		model: {},
		view: {
			format: '<button>Add</button>'
		},
		controller: {
			'click &': (function() {
				var count = 1;

				return function() {
					// Create new block and append it
					var block = $$(blockPrototype, {id: count, entry: count});
					$$.document.append(block, '#container');
					count++;
				};			
			}())
		}
	});
	*/


	var blockButton = $$(blockPrototype, {
		model: { 
			entry: '+>>'
		},
		view: {
			format: $('#add-block').html()
		},
		controller: {
			'click &': (function() {
				var count = 1;

				return function() {
					// Create new block and append it
					var block = $$(blockPrototype, {id: count, entry: count});
					$$.document.before(block, '#add');
					count++;
					// Scroll down
					$(document.body).animate({'scrollTop': $('#add').offset().top}, {duration: 2000, queue: false});		
				};			
			}())
		}
	});


	//$$.document.prepend(button)
	$$.document.append(blockButton, '#container');

	//console.log($('#add-block').html());

});
