import { connect } from "react-redux";
import { Recipes } from "./Recipes.cmp";
import { listSelector } from "./Recipes.duck";

const mapStateToProps = (state: any) => ({
  recipes: listSelector(state)
});

// const mapDispatchToProps = (dispatch: any) => ({
//   onRecipeClick(id: any) {
//     const action = Object.assign({}, new RemoveRecipe(id));
//     dispatch(action);
//   }
// });

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );

const RecipesList = connect(mapStateToProps)(Recipes);

export { RecipesList };
