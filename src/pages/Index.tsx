import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
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
