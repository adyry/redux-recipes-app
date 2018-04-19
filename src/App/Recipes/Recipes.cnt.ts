import { connect } from "react-redux";
import { Recipes } from "./Recipes.cmp";
import { listSelector } from "./Recipes.duck";

const mapStateToProps = (state: any) => ({
  recipes: listSelector(state)
});

const RecipesList = connect(mapStateToProps)(Recipes);

export { RecipesList };
