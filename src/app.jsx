import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { Redirects } from "./routes/index.routes.jsx";

// Import global styles
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <Redirects/>
    </Provider>
  </>
);
