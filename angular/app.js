var app = angular.module('facturacionApp',[
		'ngRoute',
		'facturacionApp.configuracion',
		'facturacionApp.mensajes',
		'facturacionApp.notificaciones'
	]);

app.controller('mainCtrl', ['$scope', 'Configuracion', 'Mensajes', 'Notificaciones',
		function($scope, Configuracion, Mensajes, Notificaciones){

		$scope.config = {};
		$scope.mensajes = Mensajes.mensajes;
		$scope.notificaciones = Notificaciones.notificaciones;

		console.log("mensajes:", $scope.mensajes);
		console.log("notificaciones:", $scope.notificaciones);

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

.filter('mensajecorto', function(){
		return function(mensaje){
				if(mensaje){
						if(mensaje.length > 30){
								return mensaje.substr(0,30) + "...";
						} else{
								return mensaje;
						}
				}

		}
})
