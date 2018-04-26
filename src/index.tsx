import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App/App.cmp";
import registerServiceWorker from "./registerServiceWorker";

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./App/App.duck";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import ClassToObj from "./shared/middleware/ClassToObj";

const store = createStore(rootReducer, applyMiddleware(ClassToObj));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
