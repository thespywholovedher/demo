/*
*	@author Ahmal Jones
*	@verison 0.0.1
*	@date 2/10/2013
*/
"use strict";

$(document).ready(function() {


		
	//$('body').css({backgroundColor: '#1B1A18'});


	var elementProto = $$({
		model: {},
		view: {
			format: '<div class="element">\
						<div class="image"/>\
						<div class="content">\
							<span data-bind="title"/>\
							<span data-bind="title"/>\
						</div>\
					</div>',
			style: '& span { color:#1B1A18; }\
					& div { background-color:#FFFFFF;\
							width:10em;\
							height:5em; }'
		},
		controller: {}
	});

	var containerProto = $$({
		model: {},
		view: {
			format: '<div class="container"/>',
			style: ''
		},
		controller: {}
	});

	//----------------------------------------------------//

	var ele = $$(elementProto, {
		model: {
			title: 'test'
		}
	});

	var ele2 = $$(elementProto, {
		model: {
			title: 'second'
		}
	});

	//$$.document.append(ele).append(ele2, '#element');

	//----------------TEST CODE--------------------------//

	var boxProto = $$({
		model: {},
		view: {
			format: '<div class="element">\
						<span data-bind="title"/>\
					</div>',
			style: '& span { color:#1B1A18; }\
					& div { background-color:#FFFFFF;\
							width:200px;\
							height:200px; }'
		},
		controller: {}
	});

	var boxElement = $$(boxProto,{
		model: {
			title: 'Test'
		}
	});

	//$$.document.append(boxElement);

});
