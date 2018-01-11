var app = angular.module('facturacionApp.clientes', []);

app.factory('Clientes', ['$http', '$q', function($http, $q){

    var self = {
        'cargando'      : false,
        'err'           : false,
        'conteo'        : 0,
        'clientes' 			: [],
        'pag_actual'    : 1,
        'pag_siguiente' : 1,
        'pag_anterior'  : 1,
        'total_paginas' : 1,
        'paginas'	      : [],

        cargarPagina : function(){
            var q = $q.defer();

            $http.get("php/clientes/get.clientes.php").then(
                function success(response){
                    console.log("response clientes service", response);

                    self.err           = response.data.err;
                    self.conteo        = response.data.conteo;
                    self.clientes 			= response.data.clientes;
                    self.pag_actual    = response.data.pag_actual;
                    self.pag_siguiente = response.data.pag_siguiente;
                    self.pag_anterior  = response.data.pag_anterior;
                    self.total_paginas = response.data.total_paginas;
                    self.paginas	      = response.data.paginas;

                    q.resolve();
                }, function error(response){
                    console.error(response);
                    q.reject("Error al cargar");
                });

            return q.promise;
        }
    };

    return self;

}])
