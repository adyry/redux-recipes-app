import { connect } from "react-redux";
import RecipeForm from "./RecipeForm.cmp";
import { AddRecipe } from "../recipe/Recipe.duck";
import { compose } from "redux";
import { reduxForm } from "redux-form";

const mapStateToProps = state => ({
  // initialValues:
});

const mapDispatchToProps = dispatch => ({
  onSubmit: val => {
    dispatch(AddRecipe(val.recipe, val.author));
  }
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: "recipe"
    // reinitialize: true
  })
)(RecipeForm);
