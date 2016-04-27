'use strict';
app.directive('headerDirective', function($rootScope){
	return {
	templateUrl:'resources/partials/tpl/header.tpl.html',
	controller : (['$scope','$location','loginService','homeService', function ($scope,$location,loginService,homeService) {
		
			function getCartCount(){
				var userId = loginService.getUserId();
				if(userId!=""){
						homeService.getCartCount(userId).then(function(count) {
							$scope.cartCount = count;
				    	});
				}
				
			};
		
			getCartCount();
			
			$scope.logout=function(){
				loginService.logout();
			};
			
			$scope.isLogged = function(){
				return loginService.isLogged();
			};
		
			$scope.$on('incCartCount', function(event, quantity) {
				$scope.cartCount = $scope.cartCount + quantity;
			});
			
			$scope.$on('decCartCount', function(event, quantity) {
				$scope.cartCount = $scope.cartCount - quantity;
			});
			
			$scope.$on('setCartCount', function(event, quantity) {
				$scope.cartCount =  quantity;
			});
			
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