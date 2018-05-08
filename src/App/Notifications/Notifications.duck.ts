import { delay } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import { Action, combineReducers } from "redux";
import { IRootState } from "../App.duck";
import { RecipeAction, RecipeTypes } from "../Recipes/Recipes.duck";

// Actions
enum NotificationTypes {
  ADD_NOTIFICATION = "app/notifications/ADD_NOTIFICATION",
  HIDE_NOTIFICATION = "app/notifications/HIDE_NOTIFICATION",
  SHOW_NOTIFICATION = "app/notifications/SHOW_NOTIFICATION",
  REMOVE_NOTIFICATION = "app/notifications/REMOVE_NOTIFICATION"
}

export class AddNotification implements Action {
  public type: NotificationTypes.ADD_NOTIFICATION = NotificationTypes.ADD_NOTIFICATION;
  constructor(public payload: { text: string; id: number }) {}
}

export class ShowNotification implements Action {
  public type: NotificationTypes.SHOW_NOTIFICATION = NotificationTypes.SHOW_NOTIFICATION;
  constructor(public payload: { id: number }) {}
}

export class HideNotification implements Action {
  public type: NotificationTypes.HIDE_NOTIFICATION = NotificationTypes.HIDE_NOTIFICATION;
  constructor(public payload: { id: number }) {}
}

export class RemoveNotification implements Action {
  public type: NotificationTypes.REMOVE_NOTIFICATION = NotificationTypes.REMOVE_NOTIFICATION;
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
    case NotificationTypes.ADD_NOTIFICATION:
      return [
        ...state,
        {
          id: action.payload.id,
          open: false,
          text: action.payload.text
        }
      ];
    case NotificationTypes.SHOW_NOTIFICATION:
      return state.map(
        notif =>
          notif.id === action.payload.id ? { ...notif, open: true } : notif
      );
    case NotificationTypes.HIDE_NOTIFICATION:
      return state.map(
        notif =>
          notif.id === action.payload.id ? { ...notif, open: false } : notif
      );
    case NotificationTypes.REMOVE_NOTIFICATION:
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

// Complex Actions

const notifText = (type: RecipeTypes) => {
  switch (type) {
    case RecipeTypes.ADD_RECIPE:
      return "added";
    case RecipeTypes.REMOVE_RECIPE:
      return "removed";
    default:
      return "unsupported action";
  }
};

let nextNotificationId = 0;

function* showNotificationWithTimeout(action: RecipeAction) {
  const text = notifText(action.type);
  const id = nextNotificationId++;
  yield put(new AddNotification({ text, id }));
  yield call(delay, 60);
  yield put(new ShowNotification({ id }));
  yield call(delay, 3000);
  yield put(new HideNotification({ id }));
  yield call(delay, 60);
  yield put(new RemoveNotification({ id }));
}

export function* notifSaga() {
  yield takeEvery(
    [RecipeTypes.ADD_RECIPE, RecipeTypes.REMOVE_RECIPE],
    showNotificationWithTimeout
  );
}
