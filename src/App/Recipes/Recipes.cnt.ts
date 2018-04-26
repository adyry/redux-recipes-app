import { connect } from "react-redux";
import { IRootState } from "./../App.duck";
import { Recipes } from "./Recipes.cmp";
import { listSelector } from "./Recipes.duck";

const mapStateToProps = (state: IRootState) => ({
  recipes: listSelector(state)
});

const RecipesList = connect(mapStateToProps)(Recipes);

export default RecipesList;
