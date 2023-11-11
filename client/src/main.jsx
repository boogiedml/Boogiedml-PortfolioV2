import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "swiper/css";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import "./index.css";
import ScrollToTop from "./helpers/ScrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
