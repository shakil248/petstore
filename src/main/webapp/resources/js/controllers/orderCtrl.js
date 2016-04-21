'use strict';
app.controller('orderCtrl', function($scope,loginService,sessionService,orderService){
	
	$scope.lId = sessionService.get('userId');
	$scope.noOrders = false;
	
	$scope.getOrder=function(){
		if($scope.lId!=""){
			orderService.getOrder($scope.lId).then(function(orders) {
				if(orders!=""){
					$scope.noOrders = false;
					$scope.orders = orders;
				}else{
					$scope.noOrders = true;
				}
				
		    });
	}
	};
	
	$scope.getOrderHistory=function(){
		if($scope.lId!=""){
			orderService.getOrderHistory($scope.lId).then(function(orders) {
				if(orders!=""){
					$scope.noOrders = false;
					$scope.orders = orders;
				}else{
					$scope.noOrders = true;
				}
				
		    });
	}
	};
	
	$scope.logout=function(){
		loginService.logout();
	};
	
	
	$scope.isLogged = function(){
		return loginService.isLogged();
	};

	
});
