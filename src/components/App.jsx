import Header from "./common/header/Header";
import Footer from "./common/Footer";
import HeroSeaction from "./heroSeaction/HeroSeaction";
import About from "./about/About";
import Services from "./services/Services";
import Projects from "./projects/Projects";
import Skill from "./skills/Skill";
import "animate.css";
const App = () => {
  return (
    <>
      <Header />
      <HeroSeaction />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};
export default App;
