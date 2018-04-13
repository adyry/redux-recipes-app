import { combineReducers } from "redux";
import recipeReducer from "./recipe/Recipe.duck";
import recipeForm from "./RecipeForm/RecipeForm.duck";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  app: combineReducers({
    recipes: recipeReducer,
    form: recipeForm
  }),
  form: formReducer
});
