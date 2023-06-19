import { useSelector } from "react-redux";

import "./App.css";
import {
  About,
  Boogiedml,
  Footer,
  Navbar,
  Projects,
  Skills,
} from "./containers";
import { useEffect } from "react";
import { Clock, SkillsSlide } from "./components";

function App() {
  const { theme } = useSelector((state) => state.theme);

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
    <div style={backgroundStyles} className="relative">
      <Navbar />
      <Boogiedml />
      <About />
      <Skills />
      <SkillsSlide />
      <Projects />
      <Footer />
      <Clock />
    </div>
  );
}

export default App;
