var app = angular.module('facturacionApp.clientesCtrl',[

]);

//CONTROLADOR DE CLIENTES
app.controller('clientesCtrl', ['$scope', 'Clientes', function($scope, Clientes){

    $scope.activar('mClientes', '', 'Clientes', 'listado');
    $scope.clientes = {};

    Clientes.cargarPagina().then(function(){
        console.log("CLientes: ", Clientes)
        $scope.clientes = Clientes;
    });

}])
