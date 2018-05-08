import { delay } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import {
  AddNotification,
  HideNotification,
  RemoveNotification,
  ShowNotification
} from "./Notifications.duck";

import { TypeKeys } from "../Recipes/Recipes.duck";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const notifText = (type: TypeKeys) => {
  switch (type) {
    case TypeKeys.ADD_RECIPE:
      return "added";
    case TypeKeys.REMOVE_RECIPE:
      return "removed";
    default:
      return "unsupported action";
  }
};

let nextNotificationId = 0;

function* showNotificationWithTimeout(action: any) {
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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("app/recipes/ADD_RECIPE", showNotificationWithTimeout);
}

export default mySaga;
