var app = angular.module('facturacionApp',[
		'ngRoute', //Rutas
		'jcs-autoValidate', //Validaciones
		'facturacionApp.configuracion',
		'facturacionApp.mensajes',
		'facturacionApp.notificaciones',
		'facturacionApp.clientesCtrl',
		'facturacionApp.dashboardCtrl',
		'facturacionApp.clientes'
	]);

//Traducir mensajes de validacion a Español
angular.module('jcs-autoValidate')
		.run([
		    'defaultErrorMessageResolver',
		    function (defaultErrorMessageResolver) {
		        // To change the root resource file path
		        defaultErrorMessageResolver.setI18nFileRootPath('angular/lib');
		        defaultErrorMessageResolver.setCulture('es-co');
		    }
]);

app.controller('mainCtrl', ['$scope', 'Configuracion', 'Mensajes', 'Notificaciones',
		function($scope, Configuracion, Mensajes, Notificaciones){

		$scope.config = {};
		$scope.mensajes = Mensajes.mensajes;
		$scope.notificaciones = Notificaciones.notificaciones;

		$scope.titulo = "";
		$scope.subtitulo = "";

		console.log("mensajes:", $scope.mensajes);
		console.log("notificaciones:", $scope.notificaciones);

		$scope.usuario = {
				nombre : "Diego Abanto"
		}

		Configuracion.cargar().then(function(){
				$scope.config = Configuracion.config;
				console.log($scope.config);
		})

		//FUNCIONES GLOBALES

		$scope.activar = function(menu, submenu, titulo, subtitulo){

				$scope.titulo = titulo;
				$scope.subtitulo = subtitulo;

				$scope.mDashboard = "";
				$scope.mClientes = "";

				$scope[menu] = 'active';
		}

}])

//RUTAS
app.config(['$routeProvider', function($routeProvider){
		$routeProvider
				.when('/', {
						templateUrl: 'dashboard/dashboard.html',
						controller: 'dashboardCtrl'
				})
				.when('/clientes/:pag', {
						templateUrl: 'clientes/clientes.html',
						controller: 'clientesCtrl'
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
