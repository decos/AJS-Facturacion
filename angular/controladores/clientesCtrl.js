var app = angular.module('facturacionApp.clientesCtrl',[

]);

//CONTROLADOR DE CLIENTES
app.controller('clientesCtrl', ['$scope', function($scope){

    $scope.activar('mClientes', '', 'Clientes', 'listado') 

}])
