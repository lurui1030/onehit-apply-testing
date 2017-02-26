(function() {
	class UsersController {
		constructor(usersService){
			this.getUser = function(){
				usersService.getUsersService().then(res =>{
					this.users = res;
				});
			}
		}
	}
	UsersController.$inject = ['usersService'];
	angular.module('oneHitApply').controller('UsersController', UsersController);
})();