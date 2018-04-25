// import { SFC } from "react";
import { connect } from "react-redux";
// import { Action, Dispatch } from "redux";
// import { RemoveRecipe } from "./../Notifications.duck";
// import Notification, { INotificationProps } from "./Notification.cmp";
import Notification from "./Notification.cmp";
// import { INotificationProps } from "./Notification.cmp";

// const mapDispatchToProps = (
//   dispatch: Dispatch<Action>,
//   ownProps: INotificationProps
// ) => ({
//   onRecipeClick(e: Event) {
//     dispatch(new RemoveRecipe({ id: ownProps.id }));
//   }
// });

// Shorthand notation for MapDispatch used (bc. arguments are the same)-> { onRecipeClick: RemoveRecipe }

// const RecipesList = connect(mapStateToProps, { onRecipeClick: RemoveRecipe })(
//   Recipe
// );

const NotificationCnt: any = connect(null, (state: any) => state)(Notification);

export default NotificationCnt;
