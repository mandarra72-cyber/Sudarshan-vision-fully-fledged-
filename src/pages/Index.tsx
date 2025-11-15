import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
