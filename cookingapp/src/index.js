import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import Header from "./Components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
