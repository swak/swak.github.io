"use strict";
(function() {
    angular.module("frameworkModule").directive("framework", function () {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "FrameworkController",
            templateUrl: "ext-modules/framework/frameworkTemplate.html"
            
        };
    });
}());