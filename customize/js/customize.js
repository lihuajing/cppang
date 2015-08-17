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

app.controller('StudentListController', function ($scope) {
    var students = [{name: 'Mary Contrary', id: '1'}, {name: 'Jack Sprat', id: '2'}, {name: 'Jill Hill', id: '3'}];
    $scope.students = students;
    $scope.insertTom = function () {
        $scope.students.splice(1, 0, {name: 'Tom Thumb', id: '4'});
    };
});

app.controller('AlbumController', function ($scope) {
    var album = [{name: 'Southwest Serenade', duration: '2:34'}, {
        name: 'Northern Light Waltz',
        duration: '3:21'
    }, {name: 'Eastern Tango', duration: '17:45'}];
    $scope.album = album;
});

app.controller('DeathRayMenuController', function ($scope) {
    $scope.menuState = {show: false};
    $scope.toggleMenu = function () {
        $scope.menuState.show = !$scope.menuState.show;
    };
    $scope.isDisabled=false;
    $scope.stun=function(){
        $scope.isDisabled=true;
    }
});

app.controller('HeaderController',function($scope){
    $scope.isError=false;
    $scope.isWarning=false;
    $scope.showError=function(){
        $scope.messageText='This is an error!';
        $scope.isError=true;
        $scope.isWarning=false;
    };
    $scope.showWarning=function(){
        $scope.messageText='Just a warning, Please carry on!';
        $scope.isError=false;
        $scope.isWarning=true;
    }
});

app.controller('RestaurantTableController',function($scope){
    $scope.directory=[{name:'The Handsome Heifer',cuisine:'BBQ'},{name:'Green\'s Green Greens',cuisine:'Salads'},{name:'House of Fine Fish',cuisine:'Seafood'}];
    $scope.selectRestaurant=function(row){
        $scope.selectedRow=row;
    }
});


