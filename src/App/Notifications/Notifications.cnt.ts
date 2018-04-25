import { connect } from "react-redux";
// import { Action, Dispatch } from "redux";
// import { RemoveRecipe } from "./../Recipes.duck";
import Notifications from "./Notifications.cmp";

// const mapDispatchToProps = (
//   dispatch: Dispatch<Action>,
//   ownProps: IRecipeProps
// ) => ({
//   onRecipeClick(e: Event) {
//     dispatch(new RemoveRecipe({ id: ownProps.id }));
//   }
// });

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );

const NotificationsCnt: any = connect(null, (state: any) => state)(
  Notifications
);

export default NotificationsCnt;
