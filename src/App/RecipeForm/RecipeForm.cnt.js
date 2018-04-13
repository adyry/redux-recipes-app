import { connect } from "react-redux";
import RecipeForm from "./RecipeForm.cmp";
import { AddRecipe } from "../recipe/Recipe.duck";
import { reduxForm } from "redux-form";

const mapDispatchToProps = dispatch => ({
  AddRecipe: text => dispatch(AddRecipe(text))
});

// const RecipeFormCnt = connect(null, mapDispatchToProps)(RecipeForm);
const RecipeFormCnt = reduxForm({
  form: "recipe"
})(RecipeForm);

export default RecipeFormCnt;
