import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import MarqueeQuote from "@/components/MarqueeQuote";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ConsoleEasterEgg />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <InteractiveTerminal />
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <Stats />
        <GitHubHeatmap />
        <WaveDivider className="opacity-50" />
        <Skills />
        <MarqueeQuote />
        <WaveDivider />
        <Projects />
        <WaveDivider className="opacity-50" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
