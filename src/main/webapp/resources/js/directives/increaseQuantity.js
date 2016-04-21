'use strict';
app.directive('increaseQuantity', function(){
	 var directive = {};
     directive.restrict = 'A'; 
     directive.scope =  {      val: '='  };
     directive.compile = function(element, attributes) {
         var linkFunction = function($scope, element, attributes) {
        	 element.bind('click', function () {
                 $scope.$apply(function () {
                	 $scope.val = $scope.val + 1;
                 });
             });
         };
         return linkFunction;
     };
     return directive;
});








