'use strict';
app.directive('headerDirective', function($rootScope){
	return {
	templateUrl:'resources/partials/tpl/header.tpl.html',
	controller : (['$scope','$location','loginService','homeService', function ($scope,$location,loginService,homeService) {
		
			$scope.logout=function(){
				loginService.logout();
			};
			
			$scope.isLogged = function(){
				return loginService.isLogged();
			};
		
			$scope.searchProducts = function(){
				if($scope.searchKey!=""){
					 $location.path('/home');
					homeService.searchProducts($scope.searchKey).then(function(products) {
						$rootScope.$broadcast('searchProducts', products);
			    	});
				}
				
			};
	}])
	};
});