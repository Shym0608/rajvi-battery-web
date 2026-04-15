import { motion } from "framer-motion";
import { Car, Truck, BatteryCharging, Bike } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const categories = [
  { icon: Car, title: "Car Batteries", desc: "Reliable power for all car brands", msg: "Hi! I need a car battery. Please share options." },
  { icon: Truck, title: "Truck Batteries", desc: "Heavy-duty for commercial vehicles", msg: "Hi! I need a truck battery. Please share options." },
  { icon: BatteryCharging, title: "Inverter Batteries", desc: "Long backup for homes & offices", msg: "Hi! I need an inverter battery. Please share options." },
  { icon: Bike, title: "E-Rickshaw Batteries", desc: "Durable batteries for e-rickshaws", msg: "Hi! I need an e-rickshaw battery. Please share options." },
];

export default function Categories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Battery for Every Need</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openWhatsApp(c.msg)}
              className="cursor-pointer group bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <c.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
