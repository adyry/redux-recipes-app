import { AddNotification } from "../Notifications/Notifications.duck";
import { AddRecipe } from "../Recipes/Recipes.duck";
import RecipeForm from "./RecipeForm.cmp";

import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (formValues: { author: string; recipe: string }) => {
    dispatch(new AddRecipe(formValues));
    dispatch(new AddNotification({ text: "recipe added" }));
  }
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: "recipe"
    // reinitialize: true
  })
)(RecipeForm);
