import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/rajvi-logo.png";
import { openWhatsApp } from "@/lib/whatsapp";

const socials = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@rajvibatteries4181?si=H0wQo9ig9Yq6tJar",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/rajvi_bettery_service?igsh=MWgycWw1ZGRzdXp3ZA==",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/share/1CLJnqjbK1/?mibextid=wwXIfr",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={logo} alt="Rajvi Battery Service" className="h-10 mb-4 brightness-200" />
            <p className="text-sm leading-relaxed opacity-70 mb-5">
              Your trusted partner for all battery needs. Genuine products, expert service, best prices.
            </p>
            <div className="flex gap-3">
              {socials.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Ambaji Nagar, Una-Gujarat-362560, Gujarat</li>
              <li>+91 76009 83399</li>
              <li>Mon - Sun: 10:00 AM - 8:00 PM</li>
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
