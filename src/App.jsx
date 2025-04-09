import Header from "./component/header/Header";
import Footer from "./component/Footer";
import LandingPage from "./pages/landing page/LandingPage";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Skill from "./pages/skills/Skill";
import "animate.css";
const App = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};
export default App;
