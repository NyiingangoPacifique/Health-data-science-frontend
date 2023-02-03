import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
