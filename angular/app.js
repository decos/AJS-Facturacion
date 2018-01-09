var app = angular.module('facturacionApp',[
		'ngRoute',
		'facturacionApp.configuracion'
	]);

app.controller('mainCtrl', ['$scope', 'Configuracion', function($scope, $configuracion){

		$scope.config = Configuracion.config;
		console.log($scope.config)

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
