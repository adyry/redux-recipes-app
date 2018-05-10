import { AddRecipe } from "../Recipes/Recipes.duck";
import RecipeForm from "./RecipeForm.cmp";

import { connect, Dispatch } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";

export interface IDispatchProps {
  onSubmit: Dispatch;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
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
