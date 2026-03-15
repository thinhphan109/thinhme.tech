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

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <Stats />
        <WaveDivider className="opacity-50" />
        <Skills />
        <WaveDivider />
        <Projects />
        <WaveDivider className="opacity-50" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
