'use strict';
app.factory('cartService',['$http','config', function($http,config) {
	
	  return {
    	remove: function(scope, cartDetail) { 
    			var res = $http.post(config.apiUrl+'removecartitem', cartDetail);
    			res.success(function(data, status, headers, config) {
    				  console.log("Success", data);
    				  var newCartDetails = new Array();
    				  angular.forEach(scope.cart.cartDetails, function(cd){
    					  if(cartDetail.productId != cd.productId){
    						  newCartDetails.push(cd);
    					  }
    				  });
    				  scope.cart.cartDetails = newCartDetails;
    				  if(newCartDetails.length<1){
    					  scope.noItemInCart = true;
    				  }
    				  scope.$emit('decCartCount', cartDetail.quantity);
    			});
    			res.error(function(data, status, headers, config) {
    				 console.log(data);
    			});	
    			
    			},
    	 getCart: function(lId){
				var promise  = $http.get(config.apiUrl+'getcart',{params: {userId: lId}}).
                then(function  (response) {
                    return response.data;
                });
				return promise ;
    		 
    	 	},
    createOrder: function(scope, cart) { 
    	var orderDetails = new Array();
    	var totalAmount = 0.0;
    	angular.forEach(cart.cartDetails, function(cartDetail){
    		var orderDetail = new Object();
    		orderDetail.productId = cartDetail.productId;
    		orderDetail.quantity = cartDetail.quantity;
    		totalAmount = totalAmount + parseFloat(cartDetail.productPrice*cartDetail.quantity) ;
    		orderDetails.push(orderDetail);
    	});
    	var order = new Object();
    	var d = new Date();
    	order.userId= cart.userId;
    	order.orderNumber = d.getTime();
    	order.totalAmount= totalAmount;
    	order.orderDetails = orderDetails;
    	order.status = "inprogress";
    	
    			var res = $http.post(config.apiUrl+'createorder', order);
    			res.success(function(data, status, headers, config) {
    				  console.log("Success", data);
    				  scope.orderPlaced = true;
    				  scope.noItemInCart = true;
    				  scope.$emit('setCartCount', 0);
  					
    			});
    			res.error(function(data, status, headers, config) {
    				 console.log(data);
    			});	
    			
    		},
   
    };
 
}]);







