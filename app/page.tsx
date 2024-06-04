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
      <section className="w-[85%] flex justify-center shadow-md items-center">
        <AboutSection />
      </section>
      {/* <section>
        <Projects />
      </section> */}
      <section className="w-[85%] flex justify-center shadow-md items-center">
        <TechStack />
      </section>
      {/* <section className="w-[85%] rounded-xl flex justify-center shadow-md items-center">
        <Experience />
      </section> */}
    </main>
  );
}
