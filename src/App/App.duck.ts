import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import notificationsReducer, {
  INotificationsListState
} from "./Notifications/Notifications.duck";
import recipeReducer, { IRecipeState } from "./Recipes/Recipes.duck";

export interface IRootState {
  app: {
    notifications: INotificationsListState;
    recipes: IRecipeState;
  };
  form: any;
}

export default combineReducers({
  app: combineReducers({
    notifications: notificationsReducer,
    recipes: recipeReducer
  }),
  form: formReducer
});
