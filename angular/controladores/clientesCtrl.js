var app = angular.module('facturacionApp.clientesCtrl',[

]);

//CONTROLADOR DE CLIENTES
app.controller('clientesCtrl', ['$scope', '$routeParams', 'Clientes', function($scope, $routeParams, Clientes){

    var pag =  $routeParams.pag;

    $scope.activar('mClientes', '', 'Clientes', 'listado');
    $scope.clientes = {};
    $scope.clienteSel = {};

    $scope.moverA = function(pag){
        Clientes.cargarPagina(pag).then(function(){
            console.log("CLientes: ", Clientes)
            $scope.clientes = Clientes;
        });
    }

    $scope.moverA(pag);

    //Mostrar modal de edición
    $scope.mostrarModal = function(cliente){
        console.log("Modal.cliente:" , cliente)

        angular.copy(cliente, $scope.clienteSel)

        $("#modal_cliente").modal();
    }

}])
