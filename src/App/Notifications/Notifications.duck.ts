import { Action, combineReducers } from "redux";
import { IRootState } from "../App.duck";

// Actions
enum TypeKeys {
  ADD_NOTIFICATION = "app/notifications/ADD_NOTIFICATION",
  HIDE_NOTIFICATION = "app/notifications/HIDE_NOTIFICATION"
}

export class AddNotification implements Action {
  public type: TypeKeys.ADD_NOTIFICATION = TypeKeys.ADD_NOTIFICATION;
  constructor(public payload: any) {}
}

export class HideNotification implements Action {
  public type: TypeKeys.HIDE_NOTIFICATION = TypeKeys.HIDE_NOTIFICATION;
  constructor(public payload: any) {}
}

type NotificationAction = AddNotification | HideNotification;

// Reducers
let id = 0;
export const notificationsReducer = (
  state: INotificationsList = [],
  action: NotificationAction
): INotificationsList => {
  switch (action.type) {
    case TypeKeys.ADD_NOTIFICATION:
      return [
        ...state,
        {
          id: id++,
          text: action.payload.text
        }
      ];
    case TypeKeys.HIDE_NOTIFICATION:
      return [...state].filter(v => !(v.id === action.payload.id));
    default:
      return state;
  }
};

// Selectors
export const notificationsSelector = (
  state: IRootState
): INotificationsListState => state.app.notifications;

export const notificationsListSelector = (
  state: IRootState
): INotificationsList => state.app.notifications.list;

export default combineReducers({
  list: notificationsReducer
});

export interface INotificationsList
  extends Array<{ text: string; id: number }> {}

export interface INotificationsListState {
  list: INotificationsList;
}
