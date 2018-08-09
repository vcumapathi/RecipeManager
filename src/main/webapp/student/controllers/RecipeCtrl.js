var app = angular.module('user');
app.controller('RecipeCtrl',['$scope','$state','$mdToast','recipeService',
	function($scope,$state,$mdToast,recipeService){
	
	 
	 $scope.recipeObj = {};
		$scope.saveDetails = function(recipeObj){
			recipeService.saveDetails(recipeObj).then(function(result){
				var message=result.status;
		
				 $scope.projectForm.$setPristine();
						 $scope.recipeObj = {};
				if(message ==='Saved Successfully')
					{
					console.log('success');
					 $scope.getRecipeList();
					}
				else{
					console.log('not success');
				}
			},function(err){
				console.log('error while saving...!');
			})
		}
		
		 $scope.getRecipeList = function(){
			 recipeService.getRecipeList().then(function(response){
				 console.log(response); 
				 $scope.recipes = response;
			 },function(error){
				 
			 })
		 }
		 
		 $scope.homeShow = true;
		 $scope.showRecipe = false; 
		 $scope.addRecipe=function(){
			 $scope.show = false;
			 $scope.homeShow = false;
			 $scope.showRecipe = true; 
			
		 }
		 
		 $scope.getRecipeList();
		 $scope.show = false; 
		 $scope.getRecipe = function(cId){
		 recipeService.getRecipe(cId).then(function(response){
			console.log(response); 
			$scope.items = response;
			if(response !=null){
				$scope.showRecipe = false; 
				 $scope.homeShow = false;
				 $scope.show = true;
			}
		 },function(error){
			 console.log(error);
		 });
	 };
	 
	 $scope.clearForm = function(){
		 $scope.projectForm.$setPristine();
	 }
	

}])