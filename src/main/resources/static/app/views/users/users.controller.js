(function() {
	class UsersController {
		constructor($http){
			this.getUser = function(){
				var url = "http://localhost:8080/users";
				$http({
					method: "GET",
					url: url
				}).then(res => {
					this.users = res.data;
				})
			}
		}
	}
	UsersController.$inject = ['$http'];
	angular.module('oneHitApply').controller('UsersController', UsersController);
})();