import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Wait for sections to render
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Categories />
      <WhyChooseUs />
      <AboutSection />
      <Reviews />
      <FAQ />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
