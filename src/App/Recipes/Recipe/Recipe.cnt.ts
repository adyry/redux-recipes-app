import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { showNotificationWithTimeout } from "../../Notifications/Notifications.duck";
import { RemoveRecipe } from "./../Recipes.duck";
import { Recipe } from "./Recipe.cmp";

export interface IOwnProps {
  id: number;
  author: string;
  text: string;
}

export interface IDispatchProps {
  onRecipeClick: any;
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: IOwnProps
) => ({
  onRecipeClick(e: Event) {
    dispatch(new RemoveRecipe({ id: ownProps.id }));
    showNotificationWithTimeout(dispatch, "removed");
  }
});

const RecipeCnt = connect(null, mapDispatchToProps)(Recipe);

export default RecipeCnt;

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );
