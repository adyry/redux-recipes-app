import { connect } from "react-redux";
import { Recipes } from "./Recipes.cmp";
import { listSelector } from "./Recipes.duck";
import { IRootState } from "./../App.duck";

const mapStateToProps = (state: IRootState) => ({
  recipes: listSelector(state)
});

const RecipesList = connect(mapStateToProps)(Recipes);

export default RecipesList;
