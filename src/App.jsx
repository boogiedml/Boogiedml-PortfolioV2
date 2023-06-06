import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { About, Boogiedml, Footer, Navbar, Skills } from "./containers";
// import { darkMode, lightMode } from "./redux/features/themeSlice";
import { useEffect } from "react";
import { Clock } from "./components";

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
    backgroundSize: "cover",
    backgroundAttachment: `${window.innerWidth <= 1024 ? "" : "fixed"}`,
  };

  return (
    <div style={backgroundStyles} className="relative">
      <Navbar />
      <Boogiedml />
      <About />
      <Skills />
      <Footer />
      <Clock />
    </div>
  );
}

export default App;
