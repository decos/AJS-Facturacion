var app = angular.module('facturacionApp',[
		'ngRoute',
		'facturacionApp.configuracion'
	]);

app.controller('mainCtrl', ['$scope', 'Configuracion', function($scope, Configuracion){

		$scope.config = {};

		$scope.usuario = {
				nombre : "Diego Abanto"
		}

		Configuracion.cargar().then(function(){
				$scope.config = Configuracion.config;
				console.log($scope.config);
		}, function(){

		})

}])

//RUTAS
app.config(['$routeProvider', function($routeProvider){
		$routeProvider
				.when('/', {
						templateUrl: 'dashboard/dashboard.html'
				})
				.otherwise({
						redirectTo: '/'
				})
}])

//FILTROS
app.filter('quitarletra', function(){
		return function(palabra){
				if(palabra){
						if(palabra.length > 1){
								return palabra.substr(1);
						} else{
								return palabra;
						}
				}

		}
})
