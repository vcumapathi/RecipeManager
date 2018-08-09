package com.student.serviceImpl;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Recipe;
import com.student.repository.RecipeRepository;
import com.student.service.RecipeService;

@Service
public class RecipeServiceImpl implements RecipeService {

	@Autowired
	private RecipeRepository recipeRepository;
	
	public Map<String, String> saveRecipe(Recipe recipe, HttpSession session) {
		Map<String,String> saveObj=recipeRepository.saveRecipe(recipe);
		return saveObj;
	}

	public List<Recipe> getRecipes() {
		List<Recipe> recipeList = recipeRepository.getRecipes();
		return recipeList;
	}

	public Recipe getRecipeObject(Integer recipeId) {
		Recipe recipeObj = recipeRepository.getRecipeObject(recipeId);
		return recipeObj;
	}

}
