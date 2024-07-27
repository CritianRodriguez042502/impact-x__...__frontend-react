import React from "react";
import { Provider } from "react-redux";

import { store } from "@/redux/index";
import { Redirects } from "@/routes/index.routes.jsx";

import { activate } from "./utils/activate.js";

// Import global styles
import "./index.css"

const App = () => {
  React.useEffect(() => {
    activate();
  }, []);

  return (
    <>
      <Provider store={store}>
        <Redirects />
      </Provider>
    </>
  );
};

export default App;
