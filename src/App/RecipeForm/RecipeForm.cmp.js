import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Field } from "redux-form";

const RecipeForm = ({ AddRecipe }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        console.log(e);
        e.preventDefault();
        // AddRecipe(input.value);
        // input.value = "";
      }}
    >
      {/* <input ref={val => (input = val)} /> */}
      <Field name="recipe" component="input" type="text" />
      <Field name="firstName" component="input" type="text" />
      <RaisedButton type="submit">Add</RaisedButton>
    </form>
  );
};

export default RecipeForm;
