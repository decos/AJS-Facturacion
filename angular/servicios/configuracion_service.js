var app = angular.module('facturacionApp.configuracion', []);

app.factory('Configuracion', ['$http', function($http){

    var self = {
        config: {
            aplicativo: "Facturación"
        }
    };

    return;

}])
