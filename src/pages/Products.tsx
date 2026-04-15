import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductInquiryDialog from "@/components/ProductInquiryDialog";

const products = [
  { name: "Exide Inva Master", type: "Inverter Battery", capacity: "150Ah", warranty: "36 Months", price: "₹12,500", rating: 4.8 },
  { name: "Amaron Go", type: "Car Battery", capacity: "65Ah", warranty: "48 Months", price: "₹6,200", rating: 4.9 },
  { name: "Luminous Red Charge", type: "Inverter Battery", capacity: "200Ah", warranty: "36 Months", price: "₹15,800", rating: 4.7 },
  { name: "Exide Xpress", type: "Truck Battery", capacity: "180Ah", warranty: "24 Months", price: "₹11,000", rating: 4.6 },
  { name: "Amaron Volt", type: "E-Rickshaw Battery", capacity: "130Ah", warranty: "18 Months", price: "₹9,500", rating: 4.5 },
  { name: "Livguard IT 1560STJ", type: "Inverter Battery", capacity: "150Ah", warranty: "42 Months", price: "₹13,200", rating: 4.8 },
  { name: "Exide Inva Tubular", type: "Inverter Battery", capacity: "180Ah", warranty: "48 Months", price: "₹16,500", rating: 4.9 },
  { name: "Amaron Pro", type: "Car Battery", capacity: "55Ah", warranty: "36 Months", price: "₹5,800", rating: 4.7 },
  { name: "Luminous Power Charge", type: "Inverter Battery", capacity: "120Ah", warranty: "30 Months", price: "₹10,200", rating: 4.6 },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddProduct = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">All Batteries</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Browse our complete range of batteries. Click "Add Product" to send an inquiry via WhatsApp.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-border group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {p.type}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-semibold text-foreground">{p.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                  <span>{p.capacity}</span>
                  <span>•</span>
                  <span>{p.warranty} Warranty</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-extrabold text-primary">{p.price}</span>
                  <button
                    onClick={() => handleAddProduct(p)}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingCart size={16} /> Add Product
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductInquiryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        product={selectedProduct}
      />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
