import Navbar from "../component/Navbar";
import About from "../component/About";
import Skills from "../component/Skills";
import Hero from "../component/Hero";
import Projects from "../component/Projects";
import ContactForm from "../component/ContactForm";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34rem),radial-gradient(circle_at_85%_12%,rgba(167,139,250,0.14),transparent_30rem),linear-gradient(180deg,#070b12_0%,#0b1120_45%,#070b12_100%)]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.16]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-72 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <section id="home">
        <Navbar></Navbar>
        <section className="relative z-10 pt-20">
          <Hero></Hero>
        </section>
      </section>

      <section id="about" className="relative z-10">
        <About></About>
      </section>

      <section id="skills" className="relative z-10">
        <Skills></Skills>
      </section>

      <section id="projects" className="relative z-10 pt-10">
        <Projects></Projects>
      </section>

      <div className="relative z-10">
        <ContactForm></ContactForm>
      </div>

      <section id="contact" className="relative z-10">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
