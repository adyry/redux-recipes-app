import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "./recipe/Recipe.duck";
// import recipeForm from "./RecipeForm/RecipeForm.duck";

export default combineReducers({
  app: combineReducers({
    // form: recipeForm,
    recipes: recipeReducer
  }),
  form: formReducer
});
