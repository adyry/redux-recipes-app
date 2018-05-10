import { connect, Dispatch } from "react-redux";
import { RemoveRecipe } from "./../Recipes.duck";
import { Recipe } from "./Recipe.cmp";

export interface IOwnProps {
  id: number;
  author: string;
  text: string;
}

export interface IDispatchProps {
  onRecipeClick: Dispatch;
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps) => ({
  onRecipeClick(e: Event) {
    dispatch(new RemoveRecipe({ id: ownProps.id }));
  }
});

const RecipeCnt = connect(null, mapDispatchToProps)(Recipe);

export default RecipeCnt;

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );
