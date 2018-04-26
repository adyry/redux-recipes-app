import { connect } from "react-redux";
import { IRootState } from "./../App.duck";
import { Recipes } from "./Recipes.cmp";
import { IRecipeState, listSelector } from "./Recipes.duck";

export interface IMapProps {
  recipes: IRecipeState;
}

const mapStateToProps = (state: IRootState): IMapProps => ({
  recipes: listSelector(state)
});

const RecipesList = connect(mapStateToProps)(Recipes);

export default RecipesList;
