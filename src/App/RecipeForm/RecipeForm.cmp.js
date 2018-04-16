import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Field } from "redux-form";

const RecipeForm = props => {
  const { handleSubmit } = props;
  let input;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="recipe" component="input" type="text" />
      <Field name="firstName" component="input" type="text" />
      <RaisedButton type="submit">Add</RaisedButton>
    </form>
  );
};

export default RecipeForm;
