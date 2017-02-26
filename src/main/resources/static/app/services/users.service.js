'use strict';

(function(){
	class UsersService{
		constructor($q, $http){
			this.$q = $q;
			this.$http = $http;
		}
		getUsersService(){
			let deferred = this.$q.defer();
			var url = "http://localhost:8080/users";
			this.$http({
				method: "GET",
				url: url,
				cache: false
			}).then(res => {
				deferred.resolve(res.data);
			}).catch(status => {
				deferred.reject(res.data);
			});
			return deferred.promise;
		}
	}

	UsersService.$inject = ['$q','$http'];
	angular.module('oneHitApply').service('usersService', UsersService)
})();