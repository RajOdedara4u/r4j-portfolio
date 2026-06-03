import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import ServicesPage from "../ServicesPage/ServicesPage"
const loader = <Spinner fullscreen={true} />;

const HeroSeaction    = dynamic(() => import("./components/HeroSeaction"),      { loading: () => loader });
const TechStack       = dynamic(() => import("./components/TechStack"),            { loading: () => loader });
const AboutPage       = dynamic(() => import("@/page/AboutPage/AboutPage"),                  { loading: () => loader });
const ProjectsSeaction = dynamic(() => import("./components/ProjectsSeaction"), { loading: () => loader });
const AskedQuestions  = dynamic(() => import("./components/AskedQuestions"),  { loading: () => loader });

export default function LandingPage() {
  return (
    <div className="min-h-screen ]">
      <HeroSeaction />
      <AboutPage />
      <TechStack />
      <ServicesPage />
      <ProjectsSeaction />
      <AskedQuestions />
    </div>
  );
}
