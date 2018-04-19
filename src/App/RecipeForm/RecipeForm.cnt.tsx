import { AddRecipe } from "../Recipes/Recipes.duck";
import RecipeForm from "./RecipeForm.cmp";

import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";

// const mapStateToProps = state => ({
// initialValues:
// });

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (formValues: { author: string; recipe: string }) => {
    const action = Object.assign({}, new AddRecipe(formValues));
    dispatch(action);
  }
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: "recipe"
    // reinitialize: true
  })
)(RecipeForm);
