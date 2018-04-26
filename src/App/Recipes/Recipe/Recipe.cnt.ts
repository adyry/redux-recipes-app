import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { RemoveRecipe } from "./../Recipes.duck";
import { IRecipeProps, Recipe } from "./Recipe.cmp";

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: IRecipeProps
) => ({
  onRecipeClick(e: Event) {
    dispatch(new RemoveRecipe({ id: ownProps.id }));
  }
});

const RecipeCnt: any = connect(null, mapDispatchToProps)(Recipe);

export default RecipeCnt;

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );
