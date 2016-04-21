'use strict';
app.directive('decreaseQuantity', function(){
	 var directive = {};
     directive.restrict = 'A'; 
     directive.scope =  {      val: '='  };
     directive.compile = function(element, attributes) {
         var linkFunction = function($scope, element, attributes) {
        	 element.bind('click', function () {
        		 if($scope.val>1){
                 $scope.$apply(function () {
                	 $scope.val = $scope.val - 1;
                 });
        		 }
             });
         };
         return linkFunction;
     };
     return directive;
});








