var app = angular.module('login.loginService', []);

app.factory('LoginService', ['$http', '$q', function( $http, $q){

    var self = {
        login: function(datos){

            var q = $q.defer()

            $http.post("php/login/post.verificar.php", datos).then(
              function success(response){
                  console.log("Verificar data service:", response.data);
                  q.resolve(response.data);
              });

            return q.promise;

        }
    };

    return self;

}])
