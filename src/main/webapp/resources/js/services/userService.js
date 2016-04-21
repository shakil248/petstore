'use strict';
app.factory('userService',['$http','config', function($http,config) {
	
	
    return {
    	
    	createUser: function(user,scope) { 
    			var res = $http.post(config.apiUrl+'user', user);
    			res.success(function(data, status, headers, config) {
    				  console.log("Success", data);
    				  scope.saveStatus = "Account created successfully";;
  					
    			});
    			res.error(function(data, status, headers, config) {
    				 console.log(data);
    				 scope.saveStatus = "!Oops saving failed";
    			});	
    			
    			},
    	 getUser: function(uId){
				var promise  = $http.get(config.apiUrl+'getuser',{params: {userId: uId}}).
                then(function  (response) {
                    return response.data;
                });
				return promise ;
    		 
    	 },	
    	 getStates: function(scope) {
    		 var res = $http.get(config.apiUrl+'states');
    		 res.success(function(data, status, headers, config) {
				  console.log("Success get States", data);
				  scope.states = data;
			});
			res.error(function(data, status, headers, config) {
				 console.log("Failure get States");
			});	

    	 },
    };
    
}]);







