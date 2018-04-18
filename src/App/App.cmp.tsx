import React from "react";
import { connect } from "react-redux";

import { RecipesList } from "./recipe/Recipe.cnt";
import RecipeFormCnt from "./RecipeForm/RecipeForm.cnt";

const App = () => {
  return (
    <div>
      <RecipeFormCnt />
      <RecipesList />
    </div>
  );
};

export default connect()(App);
