import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do you provide free delivery?", a: "Yes! We offer free doorstep delivery and installation across the city and nearby areas." },
  { q: "What brands do you sell?", a: "We are authorized dealers of Exide, Amaron, Luminous, Livguard, and many more top brands." },
  { q: "Do you offer old battery exchange?", a: "Absolutely! We provide the best exchange value for your old battery when you purchase a new one." },
  { q: "How can I claim warranty?", a: "Simply contact us on WhatsApp with your purchase details. We handle the complete warranty process for you." },
  { q: "What payment methods do you accept?", a: "We accept cash, UPI (GPay, PhonePe), bank transfer, and all major cards." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground"
              >
                {f.q}
                <ChevronDown
                  size={20}
                  className={`text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
