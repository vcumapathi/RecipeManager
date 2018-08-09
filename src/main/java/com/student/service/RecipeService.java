package com.student.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.student.model.Recipe;

public interface RecipeService {

	Map<String, String> saveRecipe(Recipe recipe, HttpSession session);

	List<Recipe> getRecipes();

	Recipe getRecipeObject(Integer recipeId);

}
