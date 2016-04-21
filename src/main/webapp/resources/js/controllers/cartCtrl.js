'use strict';
app.controller('cartCtrl', function($scope,loginService,cartService,sessionService,userService){
	
	$scope.lId = sessionService.get('userId');
	$scope.noItemInCart = false;
	$scope.orderPlaced = false;
	
	getStates();
	
	if(null!=$scope.lId && $scope.lId!=''){
		cartService.getCart($scope.lId).then(function(cart) {
			if(cart == ""){
				$scope.noItemInCart = true;
			}else{
				$scope.cart= cart;
				userService.getUser($scope.lId).then(function(user) {
					$scope.user= user;
			    });
			}
	    });
		
	}
	
	$scope.remove=function(cartDetail){
		 cartService.remove($scope,cartDetail);
	};
	
	$scope.createOrder=function(cart){
		 cartService.createOrder($scope, cart);
	};
	
	$scope.logout=function(){
		loginService.logout();
	};
	
	
	$scope.isLogged = function(){
		return loginService.isLogged();
	};
	
	function getStates(){
		   userService.getStates($scope);
	};
	
});
