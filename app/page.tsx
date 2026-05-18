import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import OasisSection from "./components/OasisSection";
import RoadmapSection from "./components/RoadmapSection";
import ImpactSection from "./components/ImpactSection";
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
        <RoadmapSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
