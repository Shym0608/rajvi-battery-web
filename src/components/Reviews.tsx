import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rajesh Patel", text: "Excellent service! Got my car battery delivered and installed within 2 hours. Best prices in the city.", rating: 5 },
  { name: "Priya Shah", text: "Bought an inverter battery from Rajvi. The team helped me choose the right one. Very professional!", rating: 5 },
  { name: "Mehul Desai", text: "I've been buying batteries from Rajvi for 5 years. Always genuine products with proper warranty.", rating: 5 },
  { name: "Amit Kumar", text: "Quick response on WhatsApp, competitive pricing, and the battery is performing great for my truck.", rating: 4 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">What Our Customers Say</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <Quote size={24} className="text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.text}</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-amber-500" />
                ))}
              </div>
              <p className="font-semibold text-foreground text-sm">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
