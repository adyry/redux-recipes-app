import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App/App.cmp";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import rootReducer from "./App/App.duck";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
 