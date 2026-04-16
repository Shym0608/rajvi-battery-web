import logo from "@/assets/rajvi-logo.png";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Rajvi Battery Service" className="h-10 mb-4 brightness-200" />
            <p className="text-sm leading-relaxed opacity-70">
              Your trusted partner for all battery needs. Genuine products, expert service, best prices.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#products" className="hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Car Batteries</li>
              <li>Truck Batteries</li>
              <li>Inverter Batteries</li>
              <li>E-Rickshaw Batteries</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Ambaji Nagar, Una, Gujarat</li>
              <li>+91 76009 83399</li>
              <li>Mon - Sat: 9AM - 8PM</li>
            </ul>
            <button
              onClick={() => openWhatsApp("Hi! I'd like to know more about Rajvi Battery Service.")}
              className="mt-4 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Rajvi Battery Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
