import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import OasisSection from "./components/OasisSection";
import ShowcaseFarmSection from "./components/ShowcaseFarmSection";
import ImpactSection from "./components/ImpactSection";
import SpecsSection from "./components/SpecsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <OasisSection />
        <ShowcaseFarmSection />
        <ImpactSection />
        <SpecsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
