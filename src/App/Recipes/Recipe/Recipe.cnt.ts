import { connect } from "react-redux";
import { RemoveRecipe } from "./../Recipes.duck";
import { Recipe } from "./Recipe.cmp";

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onRecipeClick(e: Event) {
    dispatch(new RemoveRecipe({ id: ownProps.id }));
  }
});

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );

const RecipeCnt: any = connect(null, mapDispatchToProps)(Recipe);

export default RecipeCnt;
