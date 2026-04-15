import { motion } from "framer-motion";
import { Shield, Clock, Headphones, BadgeCheck, Truck, IndianRupee } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "100% Genuine", desc: "Only authorized & original batteries" },
  { icon: IndianRupee, title: "Best Prices", desc: "Competitive pricing with no hidden costs" },
  { icon: Truck, title: "Free Delivery", desc: "Doorstep delivery & free installation" },
  { icon: Shield, title: "Full Warranty", desc: "Complete manufacturer warranty support" },
  { icon: Clock, title: "Quick Service", desc: "Same-day delivery in most areas" },
  { icon: Headphones, title: "24/7 Support", desc: "Round the clock customer assistance" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Rajvi?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Why Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                <r.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
