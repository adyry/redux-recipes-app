import { connect } from "react-redux";
import { RemoveRecipe } from "./../Recipes.duck";
import { Recipe } from "./Recipe.cmp";

// const mapStateToProps = (state: any, ownProps: any) => {
//   const recipes = state;
//   window.console.log(recipes, listSelector(state), ownProps);
//   return {
//     // author: "adrain",
//     // id: 0,
//     // text: "recepta"
//   };
// };

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onRecipeClick(e: Event) {
    const action = Object.assign({}, new RemoveRecipe({ id: ownProps.id }));
    dispatch(action);
  }
});

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );

const RecipeCnt: any = connect(null, mapDispatchToProps)(Recipe);

export default RecipeCnt;
