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
			format: $('#plane-container').html()
		},
		controller: {
			// Fades out on destruction
			'click &': function () {
				var self = this;
				//this.view.$().fadeOut('slow', function() { self.destroy() });
			},
			// Fades in on creation
			'create': function () {
				//this.view.$().animate({opacity: 'toggle'}, 'slow');
			}
		}
	}),TESTER = (function () {
		var initial;

		return function (selector){
			if(initial !== undefined){
				if(initial === selector){
					console.log("Same item");
				}
				initial = undefined;
			}else{
				initial = selector;
			}
		};
	})();

	function createStyle(id, color) {
		return '#card'+id+' {\
					width: 100%;\
					height: 100%;\
					postion: absolute;\
					-webkit-transform-style: preserve-3d;\
					transform-style: preserve-3d;\
					-webkit-transition: -webkit-transform 1s;\
					transition: transform 1s;\
				}\
				#card'+id+' figure {\
					display: block;\
					position: absolute;\
					width: 100%;\
					height: 100%;\
					-webkit-backface-visibility: hidden;\
					backface-visibility: hidden;\
				}\
				#card'+id+' .front {\
					background: white;\
				}\
				#card'+id+' .back {\
					background:'+color+';\
					-webkit-transform: rotateY(180deg);\
					transform: rotateY(180deg);\
				}\
				#card'+id+'.flipped {\
					-webkit-transform: rotateY(180deg);\
					transform: rotateY(180deg);\
				}'
	}
	
	/**
	*	Shuffles an Array
	*
	*
		//+ Jonas Raoni Soares Silva
		//@ http://jsfromhell.com/array/shuffle [v1.0]
	*/
	function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};


	function create(){
		var list = [1,2,3,4,5,6,7,8,9,10], 
		colorList = ['blue', 'red', 'green', 'yellow', 'orange','blue', 'red', 'green', 'yellow', 'orange'],
		self = this;

		

		shuffle(list).map(function(id){
		
			var block = $$(blockPrototype,{
				model: {
					identity: id
				},
				view: {
					format: '<div class="container3D" >\
								<div id="card'+ id +'" class="" >\
									<figure class="front"></figure>\
									<figure class="back"></figure>\
								</div>\
							</div>',
					style: (function(){
						colorList = shuffle(colorList);
						return createStyle(id, colorList.pop());
					})()
				},
				controller: {
					'click &': function() {
						$('#card'+id).click(function(){
					        $("#card"+id).toggleClass("flipped");
						});

						//TESTER('#card'+id);
						//this.view.$('#card'+id).toggleClass('flipped');
					},
					'create': function() {
					}
				}
			});

			$$.document.append(block, '#container');

			console.log(id);
		});


	}


	create();


	/*
	 $(document.body).click(function(){
        $("#card").toggleClass("flipped");
    });
	*/

	//$$.document.append($$(blockPrototype,{}), '#container');
	
});