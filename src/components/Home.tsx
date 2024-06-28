import Intro from "./Home/Intro";
import WorkExperience from "./Home/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <Intro />
        <WorkExperience />
      </main>
    </>
  );
};

export default Home;
