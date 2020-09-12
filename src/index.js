import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.scss";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

import useGlobalState from "./store/useGlobalState";
import Context from "./store/context";

const Index = () => {
  const store = useGlobalState();
  return (
    <BrowserRouter>
      <Context.Provider value={store}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
