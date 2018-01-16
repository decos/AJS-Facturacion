var app = angular.module('facturacionApp.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function($http, $q){

    var self = {
        config: {},
        cargar: function(){
            var p = $q.defer();

            $http.get("configuracion.json")
                .then(function success(response){
                    self.config = response.data;
                    p.resolve();

                }, function error(){
                    p.reject();
                    console.log("No se pudo cargar el archivo de configuración")
                })

            return p.promise;
        }
    };

    return self;

}])
