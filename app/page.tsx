import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Experience from "./components/Experience/Experience";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <section className="w-[85%] rounded-xl mt-5 fixed top-0 flex justify-center shadow-md items-center z-50">
        <NavBar />
      </section>
      <section className="mt-28">
        <HeroSection />
      </section>
      <div id="about" className="h-32"></div>
      <section className="flex justify-center shadow-md items-center">
        <AboutSection />
      </section>
      <div id="work" className="h-20"></div>
      <section>
        <Projects />
      </section>
      <div id="skills" className="h-28"></div>
      <section>
        <TechStack />
      </section>
      {/* <section className="w-[85%] rounded-xl flex justify-center shadow-md items-center">
        <Experience />
      </section> */}
    </main>
  );
}
