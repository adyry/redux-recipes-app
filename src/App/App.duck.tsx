import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "./Recipes/Recipes.duck";

export default combineReducers({
  app: combineReducers({
    // form: recipeForm,
    recipes: recipeReducer
  }),
  form: formReducer
});
