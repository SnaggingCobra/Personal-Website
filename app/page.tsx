import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-full text-slate-100 relative">
      <Cursor />
      <Navbar />
      <FadeIn delay={0.1}><Hero /></FadeIn>
      <FadeIn delay={0.2}><About /></FadeIn>
      <FadeIn delay={0.3}><Projects /></FadeIn>
      <FadeIn delay={0.3}><Gallery /></FadeIn>
      <FadeIn delay={0.4}><Contact /></FadeIn>
      <Footer />
    </main>
  );
}