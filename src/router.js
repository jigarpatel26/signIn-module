"use strict";
angular.module('loginApp.routes', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/home/home.html'
        })
        .when('/signIn', {
            templateUrl: 'src/signIn/signIn.html',
            controller : 'RootCtrl'
        })
        .when('/register', {
            templateUrl: 'src/signIn/register.html'
        })
        .when('/welcome', {
            templateUrl: 'src/welcome/welcome.html'
        })
        .otherwise('/', {
            template: 'src/home/home.html'
        })
}])
.controller('RootCtrl', ['$scope','$http', function($scope, $http){
        $http.get('/signIn')
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
}]);