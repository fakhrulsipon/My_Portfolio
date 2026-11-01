import Navbar from "../component/Navbar";
import About from "../component/About";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import Hero from "../component/Hero";
import Projects from "../component/Projects";
import ContactForm from "../component/ContactForm";
import Footer from "../component/Footer";
import { lazy, Suspense, useEffect, useState } from "react";

// The WebGL fluid cursor is ~1000 lines + a full-screen render loop. It's split into its
// own chunk and only mounted on devices with a precise pointer (mouse/trackpad), when the
// user hasn't asked for reduced motion, and only after the browser goes idle — so it never
// competes with first paint and never runs on phones/tablets where it would hurt scrolling.
const SplashCursor = lazy(() => import("../component/SplashCursor"));

const useDeferredCursor = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const enable = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(enable, 1500);
    return () => clearTimeout(t);
  }, []);

  return enabled;
};

const MainLayout = () => {
  const showCursor = useDeferredCursor();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top_left,rgba(255,126,41,0.06),transparent_34rem),radial-gradient(circle_at_85%_12%,rgba(255,62,108,0.06),transparent_30rem),linear-gradient(180deg,#FAFAFA_0%,#F1F5F9_45%,#FAFAFA_100%)] text-[#0F172A]">
      {showCursor && (
        <Suspense fallback={null}>
          <SplashCursor />
        </Suspense>
      )}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.25]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-72 bg-gradient-to-b from-[#FF7E29]/5 to-transparent" />
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

      <section id="experience" className="relative z-10">
        <Experience></Experience>
      </section>

      <section id="projects" className="relative z-10">
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
