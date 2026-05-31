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
    <main className="min-h-full text-slate-100 relative">
      <Cursor />
      <Navbar />
      <FadeIn delay={0.1}><Hero /></FadeIn>
      <FadeIn delay={0.2}><About /></FadeIn>
      <FadeIn delay={0.25}><Skills /></FadeIn>

      {/* 3D Showcase Section */}
      <FadeIn delay={0.3}><ThreeDSectionClient /></FadeIn>

      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider my-4" />
      </div>

      <FadeIn delay={0.3}><Projects /></FadeIn>

      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider my-4" />
      </div>

      <FadeIn delay={0.35}><Certificates /></FadeIn>

      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider my-4" />
      </div>

      <FadeIn delay={0.4}><Gallery /></FadeIn>
      <FadeIn delay={0.5}><Contact /></FadeIn>
      <Footer />
    </main>
  );
}