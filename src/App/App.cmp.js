import React from "react";
import { connect } from "react-redux";

import { RecipesList } from "./recipe/Recipe.cnt";
import RecipeFormCnt from "./RecipeForm/RecipeForm.cnt";

let App = ({ adrian, dispatch }) => {
  return (
    <div>
      <RecipeFormCnt />
      <RecipesList />
    </div>
  );
};

export default connect()(App);
