var app = angular.module('facturacionApp.clientesCtrl',[

]);

//CONTROLADOR DE CLIENTES
app.controller('clientesCtrl', ['$scope', '$routeParams', 'Clientes', function($scope, $routeParams, Clientes){

    var pag =  $routeParams.pag;

    $scope.activar('mClientes', '', 'Clientes', 'listado');
    $scope.clientes = {};

    $scope.moverA = function(pag){
        Clientes.cargarPagina(pag).then(function(){
            console.log("CLientes: ", Clientes)
            $scope.clientes = Clientes;
        });
    }

    $scope.moverA(1);

}])
