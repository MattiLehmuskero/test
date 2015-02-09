'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])
.controller('View3Ctrl', ['$scope', 'fuelModel',function($scope, fuelModel) {
  $scope.fuelItem = {
	date : 0,
	litres : 0,
	mileage : 0,
	totalMileage : 0};
  
  $scope.load = function()  {
	fuelModel.load();
  };
  
  $scope.store = function() {
	fuelModel.store();
  };
  
  $scope.reset = function() {
	localStorage.fuelArray = [];
  };
  
  	$scope.storeItem = function(){
		this.date =  $scope.fuelItem.date;
		this.litres = $scope.fuelItem.litres;
		this.mileage =  $scope.fuelItem.mileage;
		this.totalMileage = $scope.fuelItem.totalMileage;
	};
	
	$scope.save = function()  {
		var item = new $scope.storeItem();
		fuelModel.save(item);
	};

}]);