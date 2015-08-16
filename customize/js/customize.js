/**
 * Created by vinci on 15/8/16.
 */

var app = angular.module('myAngular', []);

app.controller('TextController', function ($scope) {
    var someText = {};
    someText.message = 'You have started your journey.';
    $scope.someText = someText;
});

app.controller('SomeController', function ($scope) {
    var youCheckedIt = false;
    $scope.youCheckedIt = youCheckedIt;
});

app.controller('StartUpController', function ($scope) {
    $scope.funding = {startingEstimate: 0};
    var computeNeeded = function () {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
    $scope.$watch('funding.startingEstimate', computeNeeded);
    $scope.requestFunding = function () {
        window.alert("Sorry, please get more customers first.")
    };
    $scope.reset = function () {
        $scope.funding.startingEstimate = 0;
    }
});

