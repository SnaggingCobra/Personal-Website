import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import ThreeDSectionClient from "./components/ThreeDSectionClient";

export default function Home() {
  return (
    <main>
      <h1>Prajwol Gyawali</h1>

      <p>
        I am a Web Developer from Nepal specializing in Next.js, React, and
        modern web applications.
      </p>

      <section>
        <h2>About Me</h2>
        <p>
          I am a BSc CSIT student, passionate about web development, UI design,
          and building modern interactive experiences.
        </p>
      </section>

      <section>
        <h2>Projects</h2>

        <div>
          <h3>Portfolio Website</h3>
          <p>Built using Next.js and deployed on Vercel.</p>
        </div>

        <div>
          <h3>Other Project</h3>
          <p>Describe your second project here.</p>
        </div>
      </section>
    </main>
  );
}