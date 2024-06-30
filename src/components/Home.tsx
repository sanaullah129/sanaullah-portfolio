import Intro from "./Home/Intro";
import Skills from "./Home/Skills";
import WorkExperience from "./Home/WorkExperience";
import { DATA } from "../data/resume";
import Education from "./Home/Education";
import TopProjects from "./Home/TopProjects";
import ContactMe from "./Home/ContactMe";

const Home = () => {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <Intro DATA={DATA} />
        <WorkExperience DATA={DATA} />
        <Skills DATA={DATA} />
        <Education DATA={DATA} />
        <TopProjects DATA={DATA} />
        <ContactMe />
      </main>
    </>
  );
};

export default Home;
