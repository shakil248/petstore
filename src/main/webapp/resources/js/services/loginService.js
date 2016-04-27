'use strict';
app.factory('loginService', function($location,$http,sessionService,config) {
	
    return {
        login: function(scope){ 
		
		var res = $http.get(config.apiUrl+'dologin', {params : {'userId':scope.userId, 'password':scope.password}});
		res.success(function(data, status, headers, config) {
			  console.log("Success", data);
			  if(data==true){
				  sessionService.set('userId',scope.userId);
				  $location.path('/home');  
			  }else{
				  	scope.loginStats="Login failed";
			  }
		});
		res.error(function(data, status, headers, config) {
			 console.log("Failure");
		});	
		},
		
		logout: function(){
				if(sessionService.get('userId')){
					sessionService.destroy('userId');
					$location.path('/login');
				}
		},
		isLogged: function() {
			if(sessionService.get('userId')) {return true;} else {return false;}
		},
		
		getUserId: function() {
			if(sessionService.get('userId')) {return sessionService.get('userId');} else {return "";}
		},
	
		
		
    };
});