import {
  About,
  Boogiedml,
  Contact,
  Footer,
  Navbar,
  Skills,
} from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Boogiedml />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
