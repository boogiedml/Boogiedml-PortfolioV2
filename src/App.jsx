import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home, Work } from "./pages";
import { AppSettings } from "./components";
import { closeSetting } from "./redux/features/appSettingSlice";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const { isOpened: appSettingIsOpened } = useSelector(
    (state) => state.appSetting
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const backgroundStyles = {
    backgroundColor: `${theme === "dark" ? "#161616" : "#F9F9F9"}`,
    backgroundImage:
      "url(https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: `${window.innerWidth <= 1024 ? "" : "fixed"}`,
  };

  return (
    <>
      <div style={backgroundStyles} className="relative">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work/" element={<Work />} />
        </Routes>
      </div>
      {appSettingIsOpened && (
        <AppSettings onClose={() => dispatch(closeSetting())} />
      )}
    </>
  );
}

export default App;
