import React from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
// import Components from "views/Components/Components.jsx";
// import LandingPage from "views/LandingPage/LandingPage.jsx";
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
// import LoginPage from "views/LoginPage/LoginPage.jsx";
import App from "./App"

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);