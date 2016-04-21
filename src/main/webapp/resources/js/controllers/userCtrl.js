'use strict';
app.controller('userCtrl', function($scope,userService,sessionService, loginService){
	
	$scope.userId = sessionService.get('userId');
	$scope.message="";
	$scope.userIdCheckMessage="";
	$scope.user;
	
	if(null!=$scope.userId && $scope.userId!=''){
		userService.getUser($scope.userId).then(function(user) {
			$scope.user= user;
	    });
	}
	
    $scope.createUser=function(user){
    		userService.createUser(user,$scope);
    		$scope.errorMessage="";
    	
	};
	
	 $scope.getStates=function(){
		   userService.getStates($scope);
	};
	
	$scope.logout=function(){
		loginService.logout();
	};
	
	$scope.getStates();
	
	$scope.checkUserId=function(){
		userService.getUser($scope.user.userId).then(function(user) {
			if(user!=""){
				$scope.userIdExist = true;
				$scope.userIdCheckMessage="User Id already exist";
			}else{
				$scope.userIdCheckMessage="User Id available";
				$scope.userIdExist = false;
			}
			
	    });
	};
	
	$scope.clearUser = function(user){
		$scope.user=null;
		 userService.clearImage();
		 $scope.message="";
	};
	
	$scope.isLogged = function(){
		return loginService.isLogged();
	};
});
