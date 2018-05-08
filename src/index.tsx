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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, ClassToObj))
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
