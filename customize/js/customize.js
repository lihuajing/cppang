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
    $scope.isDisabled = false;
    $scope.stun = function () {
        $scope.isDisabled = true;
    }
});

app.controller('HeaderController', function ($scope) {
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function () {
        $scope.messageText = 'This is an error!';
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function () {
        $scope.messageText = 'Just a warning, Please carry on!';
        $scope.isError = false;
        $scope.isWarning = true;
    }
});

app.controller('RestaurantTableController', function ($scope) {
    $scope.directory = [{name: 'The Handsome Heifer', cuisine: 'BBQ'}, {
        name: 'Green\'s Green Greens',
        cuisine: 'Salads'
    }, {name: 'House of Fine Fish', cuisine: 'Seafood'}];
    $scope.selectRestaurant = function (row) {
        $scope.selectedRow = row;
    }
});

app.controller('CartController', function ($scope) {
    $scope.bill = {};
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    function calculateTotals() {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    }

    $scope.$watch('items', calculateTotals, true);
});

app.factory('Items', function () {
    var items = {};
    items.query = function () {
        return [
            {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
            {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
            {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
        ];
    };
    return items;
});

app.controller('ShoppingController', function ($scope, Items) {
    $scope.items = Items.query();
});

app.filter('titleCase',function(){
    var titleCaseFilter=function(input){
        var word=input.split(' ');
        for(var i=0;i<word.length;i++){
            word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1);
        }
        return word.join(' ');
    };
    return titleCaseFilter;
});
app.controller('HomeController',function($scope){
    $scope.pageHeading='behold the majesty of your page title';
});

