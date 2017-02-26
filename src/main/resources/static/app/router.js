angular.module('oneHitApply')
	.config($stateProvider =>{
		$stateProvider
		.state('root',{
			abstract: true
		})
		.state('root.user',{
			url: '/user',
			views: {
				'content@': {
					templateUrl: 'app/views/users/users.tpl.html',
					controller: 'UsersController',
					controllerAs: 'UsersCtrl'
				}
			}
		})
		.state('root.school',{
			url: '/school',
			views: {
				'content@': {
					templateUrl: 'app/views/schools/schools.tpl.html',
					controller: 'SchoolsController',
					controllerAs: 'SchoolsCtrl'
				}
			}
		});
	});