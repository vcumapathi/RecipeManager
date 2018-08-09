angular.module('App',['user','ui.router','ui.bootstrap']).config(['$stateProvider','$urlRouterProvider','$locationProvider',
	function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider
	 

	   .state('home',{
		  url:'/home',
		  templateUrl:'student/views/home.html',
		  controller:'RecipeCtrl'
	  });
	  
	$urlRouterProvider.otherwise('/home');
}])