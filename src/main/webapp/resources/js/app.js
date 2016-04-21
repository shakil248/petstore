'use strict';
var app = angular.module('webShopApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {templateUrl:'resources/partials/login.html', controller: 'loginCtrl'});
      $routeProvider.when('/user', {templateUrl:'resources/partials/user.html', controller: 'userCtrl'});
      $routeProvider.when('/home', {templateUrl:'resources/partials/home.html', controller: 'homeCtrl'});
      $routeProvider.when('/cart', {templateUrl:'resources/partials/cart.html', controller: 'cartCtrl'});
      $routeProvider.when('/order', {templateUrl:'resources/partials/order.html', controller: 'orderCtrl'});
	  $routeProvider.otherwise({redirectTo:'/login'});
}]);
	
app.constant('config', {
      apiUrl: "http://localhost:8080/petstore/"
});







