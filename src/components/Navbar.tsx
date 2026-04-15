import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/rajvi-logo.png";
import { openWhatsApp } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "/products", isRoute: true },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home">
          <img src={logo} alt="Rajvi Battery Service" className="h-10 md:h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => openWhatsApp("Hi Rajvi Battery Service! I'd like to inquire about your batteries.")}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            <Phone size={16} /> Get Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openWhatsApp("Hi! I'd like to inquire about batteries.");
                }}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold mt-2"
              >
                <Phone size={16} /> Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
