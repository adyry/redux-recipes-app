import { AddRecipe } from "../Recipes/Recipes.duck";
import RecipeForm from "./RecipeForm.cmp";

import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";

export interface IDispatchProps {
  onSubmit: any;
}

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (formValues: { author: string; recipe: string }) => {
    dispatch(new AddRecipe(formValues));
  }
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: "recipe"
    // reinitialize: true
  })
)(RecipeForm);
