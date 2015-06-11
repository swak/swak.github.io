"use strict";
(function() {
	angular.module("Frame").controller("FrameController",
		['$scope', '$window', '$timeout', '$rootScope',
		function ($scope, $window, $timeout, $rootScope) {
			console.log("Frame Loaded.");
		}
		]);
}());