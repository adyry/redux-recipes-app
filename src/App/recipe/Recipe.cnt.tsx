import { connect } from "react-redux";
import { Recipe } from "./Recipe.cmp";
import { listSelector, RemoveRecipe } from "./Recipe.duck";

const mapStateToProps = (state: any) => ({
  recipes: listSelector(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  onRecipeClick(id: any) {
    window.console.log(RemoveRecipe(id));
    // dispatch(RemoveRecipe(id));
  }
});

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );

const RecipesList = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export { RecipesList };
