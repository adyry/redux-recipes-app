import React from "react";
import { connect } from "react-redux";
import { AddRecipe } from "./actions/index";
import { RecipesList } from "./recipesList";

let App = ({ adrian, dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(AddRecipe(input.value));
          input.value = "";
        }}
      >
        <input ref={val => (input = val)} />
        <button type="submit">Add</button>
      </form>
      <RecipesList />
    </div>
  );
};

export default connect()(App);
