var app = angular.module('app', []);
angular.module('app').controller( 'MainCtrl', function($scope) {
      
      $scope.ccinfo = {type:undefined}
      $scope.save = function(data){
        if ($scope.paymentForm.$valid){
          console.log(data) // valid data saving stuff here
        }
      }
    })
	
app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
			ngModelCtrl.$parsers.unshift(function(value){
              scope.ccinfo.type =
                (/^[0-15]/.test(value)) ? "good start..."
                :(/^[a-zA-Z]/.test(value)) ? "bad start"
                : undefined
              ngModelCtrl.$setValidity('invalid',!!scope.ccinfo.type)
              return value
            })
              function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }                    
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});