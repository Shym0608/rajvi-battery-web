import { motion } from "framer-motion";
import { Zap, Shield, Truck } from "lucide-react";
import heroBatteries from "@/assets/hero-batteries.png";
import { openWhatsApp } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-accent via-background to-secondary">
      <div className="container mx-auto px-4 py-24 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              🔋 Trusted Battery Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
              Power Your World with{" "}
              <span className="text-gradient">Rajvi Battery</span>{" "}
              Service
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Premium batteries for cars, trucks, inverters & e-rickshaws. Genuine products, expert service, and doorstep delivery across Gujarat.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => openWhatsApp("Hi! I need a battery recommendation. Can you help?")}
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary-dark transition-colors shadow-soft"
              >
                Get Best Price on WhatsApp
              </button>
              <a
                href="#products"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Browse Products
              </a>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Zap size={18} className="text-primary" /> Fast Delivery</span>
              <span className="flex items-center gap-2"><Shield size={18} className="text-primary" /> Warranty</span>
              <span className="flex items-center gap-2"><Truck size={18} className="text-primary" /> Free Install</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroBatteries}
              alt="Premium Battery Collection"
              className="w-full animate-float rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
