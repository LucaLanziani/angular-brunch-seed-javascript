(function () {
  'use strict';

  var CONTROLLER_NAME = "MyCtrl1";

  function controller($scope) {
    $scope.name = CONTROLLER_NAME;
  }

  controller.$inject = ["$scope"];

  angular
    .module('myApp')
    .controller(CONTROLLER_NAME, controller);

})();