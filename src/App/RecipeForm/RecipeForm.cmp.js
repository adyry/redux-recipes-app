import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Field } from "redux-form";

const RecipeForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field name="recipe" component="input" type="text" />
    <Field name="author" component="input" type="text" />
    <RaisedButton type="submit">Add</RaisedButton>
  </form>
);

export default RecipeForm;
