

var galleryApp = angular.module('galleryApp', []);


galleryApp.controller('GalleryController', function GalleryController($scope) {
	
	$scope.photos = [
		
		{
			src: "images/morocco1.jpg"
		},
		
		{
			src: "images/morocco2.jpg"

		},
		
		{
			src: "images/morocco3.jpg"

		}
	
	
	];
	
});