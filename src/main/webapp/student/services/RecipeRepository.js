var app = angular.module('user');
app.factory('recipeService',['$http','$q',function($http,$q){
	var service ={};

	service.saveDetails = function(user){
		var deferred = $q.defer();
	     var url = '/Recipe/recipe';
	        $http({
	        	url:url,
	        	data:user,
	        	method :"POST",
	        	headers: { 
	                'Accept': 'application/json',
	                'Content-Type': 'application/json' 
	            }
	        }).then(function success(response) {
	            deferred.resolve(response.data);
	        }, function fail() {
	            deferred.reject();
	        });
	        return deferred.promise;
};

service.getRecipeList = function() {
    var deferred = $q.defer();
    var url = '/Recipe/recipes/' ;
    $http.get(url).then(function success(response) {
        deferred.resolve(response.data);
    }, function fail(reject) {
        deferred.reject(reject);
    });
    return deferred.promise;
}

service.getRecipe=function(recipeValue) {
    var deferred = $q.defer();
    var recipeId = recipeValue.recipeId;
    
    var url = '/Recipe/recipe/' + recipeId;
    $http.get(url).then(function success(response) {
        deferred.resolve(response.data);
    }, function fail(response) {
        deferred.reject(response.data);
    });
    return deferred.promise;
}
	
	return service;
}])