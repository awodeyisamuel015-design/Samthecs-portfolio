
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WelcomeIntro from "./components/WelcomeIntro";
import MusicPlayer from "./components/MusicPlayer";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--heading-color)]">
      <Hero />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] pt-24 text-[var(--heading-color)]">
      <About />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Plays once when the app loads */}
      <WelcomeIntro />

      {/* Navigation */}
      <Navbar />

      {/* Background music player stays across all routes */}
      <MusicPlayer />

      {/* Website pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
