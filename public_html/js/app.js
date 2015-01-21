var app = angular.module('app', ['textAngular']);

app.run(function ($rootScope) {

});

app.directive('editorDir', function () {
    return {
        link : function () {

        },
        templateUrl : 'views/editor.html'
    }
});