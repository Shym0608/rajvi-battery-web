import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductInquiryDialog from "@/components/ProductInquiryDialog";

import imgInvaTubular from "@/assets/products/exide-invatubular.jpeg";
import imgEezy from "@/assets/products/exide-eezy.jpeg";
import imgMileageRed from "@/assets/products/exide-mileage-red.jpeg";
import imgAtb from "@/assets/products/exide-atb.jpeg";
import imgMileageSuv from "@/assets/products/exide-mileage-suv.jpeg";
import imgCarSuvRange from "@/assets/products/exide-car-suv-range.jpeg";
import imgMileageMl38 from "@/assets/products/exide-mileage-ml38.jpeg";
import imgHomeInvaMaster from "@/assets/products/exide-home-invamaster.jpeg";
import imgRange from "@/assets/products/exide-range.jpeg";
import imgAmazeSolar from "@/assets/products/amaze-solar.jpeg";

const products = [
  { name: "Exide Inva Tubular", type: "Inverter Battery", capacity: "150Ah", warranty: "36 Months", rating: 4.9, image: imgInvaTubular },
  { name: "Exide Eezy EGRID700", type: "Car Battery", capacity: "65Ah", warranty: "36 Months", rating: 4.8, image: imgEezy },
  { name: "Exide Mileage Red", type: "Car Battery", capacity: "45Ah", warranty: "48 Months", rating: 4.8, image: imgMileageRed },
  { name: "Exide ATB", type: "Car Battery", capacity: "55Ah", warranty: "36 Months", rating: 4.7, image: imgAtb },
  { name: "Exide Mileage Car/SUV", type: "SUV Battery", capacity: "60Ah", warranty: "48 Months", rating: 4.9, image: imgMileageSuv },
  { name: "Exide Car/SUV Range", type: "Car/SUV Range", capacity: "Various", warranty: "Up to 72 Months", rating: 4.9, image: imgCarSuvRange },
  { name: "Exide Mileage ML38B20", type: "Car Battery", capacity: "35Ah", warranty: "55 Months", rating: 4.7, image: imgMileageMl38 },
  { name: "Exide Home InvaMaster", type: "Inverter Battery", capacity: "200Ah", warranty: "60 Months", rating: 4.9, image: imgHomeInvaMaster },
  { name: "Exide Inverter Range", type: "Inverter Battery", capacity: "Various", warranty: "Up to 60 Months", rating: 4.8, image: imgRange },
  { name: "Amaze Solar Tall Tubular", type: "Solar Battery", capacity: "200Ah", warranty: "72 Months", rating: 4.8, image: imgAmazeSolar },
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
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border group flex flex-col"
              >
                <div className="aspect-[4/3] bg-secondary/40 overflow-hidden flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={`${p.name} - ${p.type}`}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {p.type}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-semibold text-foreground">{p.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground mb-5">
                    <span>{p.capacity}</span>
                    <span>•</span>
                    <span>{p.warranty} Warranty</span>
                  </div>
                  <button
                    onClick={() => handleAddProduct(p)}
                    className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
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
