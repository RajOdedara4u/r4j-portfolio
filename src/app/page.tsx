import dynamic from "next/dynamic";

import AboutPage from "@/page/AboutPage/AboutPage";
import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
const TechStack = dynamic(() => import("@/components/TechStack/TechStack"), {
  loading: () => <div className="h-40" />,
});
import { HeroSeaction, ProjectsSeaction } from "@/components";

export default function Home() {
  return (
    <div  data-aos="fade-up" className={"min-h-screen bg-[#f8f9fc]"} style={{
      backgroundImage: `
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(107,159,255,0.11) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 80%, rgba(167,139,250,0.09) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 50% 45%, rgba(244,114,182,0.05) 0%, transparent 50%)
      `
    }}>
     
<HeroSeaction />
      <TechStack />
      <AboutPage />
    <ProjectsSeaction />

      <AskedQuestions />
    </div>
  );
}
