var app = angular.module('loginApp',[
			'login.loginService'
	]);

app.controller('mainCtrl', ['$scope', 'LoginService',
		function($scope, LoginService){

			$scope.invalido = false;
			$scope.cargando = false;
			$scope.mensaje = "";

			$scope.datos = {};

			$scope.ingresar = function( datos ){

					if(datos.usuario.length < 3 ){
							$scope.invalido = true;
							$scope.mensaje = "Ingrese su usuario";
							return;
					} else if(datos.contrasena.length < 3 ){
							$scope.invalido = true;
							$scope.mensaje = "Ingrese su contraseña";
							return;
					}

					$scope.invalido = false;
					$scope.cargando = true;

					LoginService.login(datos).then(function(data){
							// TODO ...
							if( data.err ){
									$scope.invalido = true;
									$scope.cargando = false; //Ya dejo de cargar, ya hizo su trabajo
									$scope.mensaje = data.mensaje;
							} else{
									console.log("Login VALIDO!");
									window.location = data.url;
							}
					});
			}


}])
