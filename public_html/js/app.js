var app = angular.module('app', ['textAngular']);

app.run(function ($rootScope) {
    $rootScope.current_page_index = 0;
    $rootScope.count_contacts_in_line = 0;
    $rootScope.contacts_count_lines = 1;
    $rootScope.c_width = 141;
    $rootScope.$w_w = $(window).width();

    $(window).on('resize', function () {
        $rootScope.$w_w = $(this).width();
    });
});

app.directive('editorDir', function () {
    return {
        link : function () {

        },
        templateUrl : 'views/editor.html'
    }
});

app.directive('contactsDir', function () {
    return {
        link : function () {

        },
        templateUrl : 'views/contacts.html'
    }
});

app.controller('contactsCtrl', ['$scope', '$rootScope', '$timeout',
function ($scope, $rootScope, $timeout) {
    $scope.contacts = [];
    for(var i = 0; i < 1000; i++) {
        $scope.contacts.push(
            {   name : 'contact #'+(i+1),
                rand_num : i
            }
        );
    }


}]);

app.directive('contactsScroll', function ($rootScope, $timeout) {
    return {
        restrict : 'AE',
        link : function (scope, element, attr) {
            $rootScope.scrollTop = 0;
            element.css({'margin-top': $rootScope.scrollTop -= 90 + 'px'});

            $rootScope.count_contacts_in_line = Math.floor(($rootScope.$w_w - 54) / $rootScope.c_width);
            element.unbind('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function (e) {

                if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 || e.originalEvent.deltaY > 0) {
                    element.css({'margin-top': $rootScope.scrollTop -= 90 + 'px'});
                } else {
                    element.css({'margin-top': $rootScope.scrollTop += 90 + 'px'});
                }
                e.preventDefault();
            });
        }
    }
});