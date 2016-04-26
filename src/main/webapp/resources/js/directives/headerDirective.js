'use strict';
app.directive('headerDirective', function($rootScope){
	return {
	templateUrl:'resources/partials/tpl/header.tpl.html',
	controller : (['$scope','loginService', function ($scope,loginService) {
		
			$scope.logout=function(){
				loginService.logout();
			};
			
			$scope.isLogged = function(){
				return loginService.isLogged();
			};
	}])
	};
});