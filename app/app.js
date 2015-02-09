'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
])
.service('fuelModel',function(){

	this.fuelArray = [];
	this.load = function()  {
		this.fuelArray = JSON.parse(localStorage.fuelArray);
		alert('loaded');
	};
  
	this.store = function() {
		localStorage.fuelArray = JSON.stringify(this.fuelArray);
	};
	
	this.save = function(item)  {
		this.fuelArray.push(item);
		alert(JSON.stringify(this.fuelArray));
	};
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
