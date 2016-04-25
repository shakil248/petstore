'use strict';
app.controller('orderCtrl', function($scope,loginService,sessionService,orderService){
	
	$scope.lId = sessionService.get('userId');
	$scope.orderExists = false;
	
	$scope.getOrder=function(){
		if($scope.lId!=""){
			orderService.getOrder($scope.lId).then(function(orders) {
				if(orders!=""){
					$scope.orders = orders;
					$scope.orderExists = true;
				}else{
					$scope.orderExists = false;
				}
				
		    });
	}
	};
	
	$scope.getOrderHistory=function(){
		if($scope.lId!=""){
			orderService.getOrderHistory($scope.lId).then(function(orders) {
				if(orders!=""){
					$scope.orders = orders;
					$scope.orderExists = true;
				}else{
					$scope.orderExists = false;
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
