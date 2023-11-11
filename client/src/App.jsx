import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Importing pages and components
import { Home, Pos, Work } from "./pages";
import { AppSettings } from "./components";
import { closeSetting } from "./redux/features/appSettingSlice";
import ProjectLayout from "../Layouts/ProjectLayout";

function App() {
  // State management using Redux selectors and dispatch
  const { theme } = useSelector((state) => state.theme);
  const { isOpened: appSettingIsOpened } = useSelector(
    (state) => state.appSetting
  );
  const dispatch = useDispatch();

  // Update the document theme class based on the Redux theme state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Background styles for the main container
  const backgroundStyles = {
    backgroundColor: theme === "dark" ? "#161616" : "#F9F9F9",
    backgroundImage:
      "url(https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // or `${window.innerWidth <= 1024 ? "" : "fixed"}`,
  };

  return (
    <>
      {/* Main container with background and routes */}
      <div style={backgroundStyles} className="relative">
        <Routes>
          {/* Define routes and corresponding components */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work/" element={<Work />} />

          {/* Project route with ProjectLayout */}
          <Route
            path="/work/pos/"
            element={
              <ProjectLayout>
                <Pos />
              </ProjectLayout>
            }
          />
        </Routes>
      </div>
      {/* AppSettings component conditionally rendered */}
      {appSettingIsOpened && (
        <AppSettings onClose={() => dispatch(closeSetting())} />
      )}
    </>
  );
}

export default App;
