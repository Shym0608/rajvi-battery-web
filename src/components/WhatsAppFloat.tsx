import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <button
      onClick={() => openWhatsApp("Hi Rajvi Battery Service! I need help with a battery.")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-green"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}
