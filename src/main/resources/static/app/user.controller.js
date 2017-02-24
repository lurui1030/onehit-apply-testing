(function(angular) {
  var AppController = function($scope, $http) {

    $scope.deleteItem = function() {
      console.log("delete");
      $http({
    	  method: "GET",
    	  url: "http://localhost:8080/users"
      }).then(res =>{
    	  console.log(res.data[0]);
      })
    };
  };
  
  AppController.$inject = ['$scope', '$http'];
  angular.module("myApp").controller("AppController", AppController);
}(angular));