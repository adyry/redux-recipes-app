import { Action, combineReducers } from "redux";
import { IRootState } from "../App.duck";

// Actions
enum TypeKeys {
  ADD_NOTIFICATION = "app/notifications/ADD_NOTIFICATION",
  HIDE_NOTIFICATION = "app/notifications/HIDE_NOTIFICATION",
  SHOW_NOTIFICATION = "app/notifications/SHOW_NOTIFICATION",
  REMOVE_NOTIFICATION = "app/notifications/REMOVE_NOTIFICATION"
}

export class AddNotification implements Action {
  public type: TypeKeys.ADD_NOTIFICATION = TypeKeys.ADD_NOTIFICATION;
  constructor(public payload: { text: string; id: number }) {}
}

export class ShowNotification implements Action {
  public type: TypeKeys.SHOW_NOTIFICATION = TypeKeys.SHOW_NOTIFICATION;
  constructor(public payload: { id: number }) {}
}

export class HideNotification implements Action {
  public type: TypeKeys.HIDE_NOTIFICATION = TypeKeys.HIDE_NOTIFICATION;
  constructor(public payload: { id: number }) {}
}

export class RemoveNotification implements Action {
  public type: TypeKeys.REMOVE_NOTIFICATION = TypeKeys.REMOVE_NOTIFICATION;
  constructor(public payload: { id: number }) {}
}

type NotificationAction =
  | AddNotification
  | ShowNotification
  | HideNotification
  | RemoveNotification;

// Reducers
export const notificationsReducer = (
  state: INotificationsList = [],
  action: NotificationAction
): INotificationsList => {
  switch (action.type) {
    case TypeKeys.ADD_NOTIFICATION:
      return [
        ...state,
        {
          id: action.payload.id,
          open: false,
          text: action.payload.text
        }
      ];
    case TypeKeys.SHOW_NOTIFICATION:
      return state.map(
        notif =>
          notif.id === action.payload.id ? { ...notif, open: true } : notif
      );
    case TypeKeys.HIDE_NOTIFICATION:
      return state.map(
        notif =>
          notif.id === action.payload.id ? { ...notif, open: false } : notif
      );
    case TypeKeys.REMOVE_NOTIFICATION:
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
  extends Array<{ open: boolean; id: number; text: string }> {}

export interface INotificationsListState {
  list: INotificationsList;
}

// Complex Actions / Thunks
let nextNotificationId = 0;
export function showNotificationWithTimeout(dispatch: any, text: string) {
  const id = nextNotificationId++;
  dispatch(new AddNotification({ text, id }));
  setTimeout(() => {
    dispatch(new ShowNotification({ id }));
  }, 0);
  setTimeout(() => {
    dispatch(new HideNotification({ id }));
    setTimeout(() => {
      dispatch(new RemoveNotification({ id }));
    }, 1000);
  }, 3000);
}
