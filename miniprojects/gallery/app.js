

var galleryApp = angular.module('galleryApp', []);


galleryApp.component('gallery', {
	
	template: '<section class="row">'+

				'<div class="col-xs-6 col-sm-3" ng-repeat="photo in $ctrl.photos">'+
					'<img src={{photo.src}} />'+
				'</div>'+


			'</section>',
			
	controller: function GalleryController() {
	

		this.photos = [
			
			{
				src: "images/morocco1.jpg"
			},
			
			{
				src: "images/morocco2.jpg"

			},
			
			{
				src: "images/morocco3.jpg"

			},
			{
				src: "images/morocco4.jpg"
			},
			
			{
				src: "images/morocco5.jpg"

			},
			
			{
				src: "images/morocco6.jpg"

			},
			{
				src: "images/morocco7.jpg"
			},
			
			{
				src: "images/morocco8.jpg"

			}
			
		];
	}
	
});