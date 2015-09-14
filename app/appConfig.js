angular.module('swakApp').config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            // alert(exception.message); //debug alert
        };
    }]);
});
