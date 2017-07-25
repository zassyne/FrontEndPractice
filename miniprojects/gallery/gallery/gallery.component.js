
gallery.component('gallery', {
	
	templateUrl: 'gallery/gallery.template.html',
			
	controller: ['$http', '$scope', function GalleryController($http, $scope) {
	

		var self = this;

		var request = new XMLHttpRequest();
		request.open('GET', 'photos.json', true);
		request.send(null);
		//parse(this, request, $scope)

		$http.get('photos.json').then(function (response) {
			self.photos = (response.data);
		});


	}]


	
});

function parse(scope, request, $scope) {

	request.onreadystatechange = function () {

		if(request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
			scope.photos = JSON.parse(request.responseText);
			$scope.$apply();
		}
	};

}