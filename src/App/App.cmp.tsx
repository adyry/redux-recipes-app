import React from "react";
import { connect } from "react-redux";

import RecipeFormCnt from "./RecipeForm/RecipeForm.cnt";
import { RecipesList } from "./Recipes/Recipes.cnt";

const App = () => {
  return (
    <div>
      <RecipeFormCnt />
      <RecipesList />
    </div>
  );
};

export default connect()(App);
