(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  //Declare a scope property
  $scope.onceCounter = 0;
  //Declare another property
  $scope.counter = 0;

  $scope.showNumberOfWatchers = function () {
 //Log the scope service
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  //Create the countOnce function, this determines the number of times that the number of watchers can be counted
  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  }

  $scope.$watch('onceCounter', function (newValue, oldValue) {
    console.log("onceCounter old value: ", oldValue);
    console.log("onceCounter new value: ", newValue);
  });

  //Watch for our counter property
  $scope.$watch('counter', function (newValue, oldValue) {
    console.log("counter old value: ", oldValue);
    console.log("counter new value: ", newValue);
  });
}

})();
