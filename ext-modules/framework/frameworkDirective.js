"use strict";
(function() {
    angular.module("frameModule").directive("frame", function () {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "FrameController",
            templateUrl: "ext-modules/frame/frameTemplate.html"
            
        };
    });
}());