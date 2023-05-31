import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { Boogiedml, Navbar } from "./containers";
import { darkMode, lightMode } from "./redux/features/themeSlice";
import { useEffect } from "react";

function App() {
  const { theme } = useSelector((state) => state.theme);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // useEffect(() => {
  //   if (
  //     theme === "dark" &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     dispatch(darkMode());
  //   } else {
  //     dispatch(lightMode());
  //   }
  // }, []);

  const backgroundStyles = {
    backgroundColor: `${theme === "dark" ? "#161616" : "#e3e3e3"}`,
    backgroundImage:
      "url(https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover,",
  };

  return (
    <div style={backgroundStyles}>
      <Navbar />
      <Boogiedml />
    </div>
  );
}

export default App;
