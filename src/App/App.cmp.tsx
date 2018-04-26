import React from "react";
import { connect } from "react-redux";

import Notifications from "./Notifications/Notifications.cnt";
import RecipeFormCnt from "./RecipeForm/RecipeForm.cnt";
import RecipesList from "./Recipes/Recipes.cnt";

const App = () => {
  return (
    <div>
      <RecipeFormCnt />
      <RecipesList />
      <Notifications />
    </div>
  );
};

export default connect()(App);
