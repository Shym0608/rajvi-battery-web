import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `Hi! I'm ${form.name}.\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Get In Touch</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Visit Us</h4>
                <p className="text-sm text-muted-foreground">Ambaji Nagar, Una-Gujarat-362560</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Call Us</h4>
                <p className="text-sm text-muted-foreground">+91 76009 83399</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Working Hours</h4>
                <p className="text-sm text-muted-foreground">Mon - Sun: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
            <button
              onClick={() => openWhatsApp("Hi! I want to visit your store. Please share your location.")}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors mt-4"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                placeholder="Tell us what you need..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
