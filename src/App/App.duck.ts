import { combineReducers } from "redux";
import { FormReducer, reducer as formReducer } from "redux-form";

import notificationsReducer, {
  INotificationsListState
} from "./Notifications/Notifications.duck";
import recipeReducer, { IRecipeListState } from "./Recipes/Recipes.duck";

export interface IRootState {
  app: {
    notifications: INotificationsListState;
    recipes: IRecipeListState;
  };
  form: FormReducer;
}

export default combineReducers({
  app: combineReducers({
    notifications: notificationsReducer,
    recipes: recipeReducer
  }),
  form: formReducer
});
