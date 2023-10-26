import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initialState, appReducers } from "./reducers";
import { AppStateProvider } from "./contexts/appState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
);
