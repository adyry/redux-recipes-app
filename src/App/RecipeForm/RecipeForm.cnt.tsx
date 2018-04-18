import { AddRecipe } from "../recipe/Recipe.duck";
import RecipeForm from "./RecipeForm.cmp";

import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";

// const mapStateToProps = state => ({
// initialValues:
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: formValues => {
//     dispatch(AddRecipe(formValues));
//   }
// });

export default compose(
  connect(null, { onSubmit: AddRecipe }),
  reduxForm({
    form: "recipe"
    // reinitialize: true
  })
)(RecipeForm);
