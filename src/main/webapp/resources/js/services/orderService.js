'use strict';
app.factory('orderService',['$http','config', function($http,config) {
	
	  return {
    	
		  getOrder: function(uId){
				var promise  = $http.get(config.apiUrl+'getorder',{params: {userId: uId}}).
                then(function  (response) {
                    return response.data;
                });
				return promise ;
    		 
    	 	},
    	 	 getOrderHistory: function(uId){
 				var promise  = $http.get(config.apiUrl+'getorderhistory',{params: {userId: uId}}).
                 then(function  (response) {
                     return response.data;
                 });
 				return promise ;
     		 
     	 	},
    };
 
}]);







