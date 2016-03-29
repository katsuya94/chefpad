var app = angular.module('ChefPadApp', ['firebase']);
app.controller('ChefPadCtrl', function($scope, $firebaseObject) {
  var ref = new Firebase('https://chefpad.firebaseio.com');
  var data = $firebaseObject(ref);
  data.$bindTo($scope, 'data');
});
