var app = angular.module('facturacionApp.mensajes', []);

app.factory('Mensajes', ['$http', '$q', function($http, $q){

    var self = {
        mensajes: [{
            img: 'dist/img/user2-160x160.jpg',
            nombre: 'Raul Abanto',
            mensaje: 'Bienvenido a nuestro servicio de facturación.',
            fecha: '5-marzo'
        }, {
            img: 'dist/img/user2-160x160.jpg',
            nombre: 'Maria Soto',
            mensaje: 'Esto es un mensaje de prueba 01.',
            fecha: '8-marzo'
        },{
            img: 'dist/img/user2-160x160.jpg',
            nombre: 'Luis Abanto',
            mensaje: 'Esto es otro mensaje de prueba 02.',
            fecha: '15-marzo'
        }]
    };

    return self;

}])
