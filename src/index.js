import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router basename="/BLKS-front-test">
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
