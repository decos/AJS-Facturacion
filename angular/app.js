var app = angular.module('facturacionApp',[
	'ngRoute',
	]);

app.controller('mainCtrl', ['$scope', function($scope){


}])

app.config(['$routeProvider', function($routeProvider){
		$routeProvider
				.when('/', {
						templateUrl: 'dashboard/dashboard.html'
				})
				.otherwise({
						redirectTo: '/'
				})
}])
