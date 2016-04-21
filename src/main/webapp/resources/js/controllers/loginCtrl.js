'use strict';
app.controller('loginCtrl', function($scope,$location, loginService,sessionService){
	
	$scope.userId;
	$scope.password;
	$scope.loginStats="";
	
	
    $scope.login=function(){
	   loginService.login($scope);
	};

	  
});








