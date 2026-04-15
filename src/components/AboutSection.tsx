import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Authorized dealer of Exide, Amaron, Luminous & Livguard",
  "Serving Gujarat for 10+ years with 5000+ happy customers",
  "Expert battery consultation & old battery exchange",
  "Complete after-sales support & warranty claims",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-primary-foreground text-center">
              <div className="text-6xl font-extrabold mb-2">10+</div>
              <div className="text-lg font-semibold opacity-90">Years of Experience</div>
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div><div className="text-3xl font-bold">5000+</div>Happy Customers</div>
                <div><div className="text-3xl font-bold">15+</div>Battery Brands</div>
                <div><div className="text-3xl font-bold">500+</div>Monthly Sales</div>
                <div><div className="text-3xl font-bold">4.9★</div>Google Rating</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
              Rajvi Battery Service — Your Trusted Battery Partner
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are Gujarat's leading battery service provider, offering genuine automotive and inverter batteries at the best prices. From consultation to installation, we handle everything with care and expertise.
            </p>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
