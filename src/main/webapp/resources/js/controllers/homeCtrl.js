'use strict';
app.controller('homeCtrl', ['$scope','homeService','loginService','sessionService', function ($scope,homeService,loginService,sessionService) {
	$scope.tabs = new Array();
	$scope.productCats;
	$scope.productsExists=false;
	$scope.errorMessage = "";
	
    $scope.getProductCategories = function (){
    	homeService.getProductCategories($scope).then(function(pCats) {
    		$scope.productCats = pCats;
    	});
    };
    
    
    
    $scope.getProductCategories();
    $scope.onClickTab = function (pcId) {
    	 $scope.getProductByCat(pcId);
    };

    $scope.getProductByCat = function(title) {
    	homeService.getProductByCat(title).then(function(products) {
    		if(products != ""){
    			for(var i = 0;i<products.length;i++){
					products[i].quantity = 1;
				}
		    	$scope.products = products;	
    			$scope.productsExists=true;
    		}    		
    	});
    };
    
    $scope.addToCart = function(product) {
    	var isLogged = loginService.isLogged();
    	if(isLogged){
    		homeService.addToCart(product, $scope);
    	}else{
    		$scope.errorMessage = "Please login to add Item in cart";
    	}
    	
    };

    $scope.isLogged = function(){
		return loginService.isLogged();
	};
	$scope.logout=function(){
		loginService.logout();
	};
	
}]);