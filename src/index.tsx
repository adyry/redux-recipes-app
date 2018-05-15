import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App/App.cmp";
import registerServiceWorker from "./registerServiceWorker";

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./App/App.duck";
import { notifSaga } from "./App/Notifications/Notifications.duck";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import ClassToObj from "./shared/middleware/ClassToObj";
import { fromLocalStorage, toLocalStorage } from "./shared/utils/localStorage";

import throttle from "lodash/throttle";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  fromLocalStorage(),
  composeWithDevTools(applyMiddleware(sagaMiddleware, ClassToObj))
);

store.subscribe(
  throttle(() => {
    window.console.log("saved");
    toLocalStorage({
      app: {
        recipes: store.getState().app.recipes
      }
    });
  }, 1000)
);

sagaMiddleware.run(notifSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
