"use strict";
(function () {
    angular.module("framework").directive("framework", function () {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "FrameworkController",
            templateUrl: "modules/framework/frameworkTemplate.html"

        };
    });
} ());