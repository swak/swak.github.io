"use strict";
(function() {
  angular.module("framework").controller("FrameworkController", ['$scope', '$window', '$timeout', '$rootScope',
    function($scope, $window, $timeout, $rootScope) {
      console.log("Framework Controller Loaded.");
    }
  ]);
}());
