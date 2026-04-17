import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";

interface ProductInquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: { name: string; capacity: string; type: string } | null;
}

export default function ProductInquiryDialog({ open, onOpenChange, product }: ProductInquiryDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    if (!product) return;

    const message = `Hi Rajvi Battery Service!\n\nI'd like to inquire about:\n📦 Product: ${product.name}\n⚡ Type: ${product.type}\n🔋 Capacity: ${product.capacity}\n\n👤 Name: ${trimmedName}\n📧 Email: ${trimmedEmail}\n\nPlease share availability and best price. Thank you!`;

    openWhatsApp(message);
    setName("");
    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Inquire About Product</DialogTitle>
          <DialogDescription>
            {product && (
              <span className="block mt-1">
                <strong className="text-foreground">{product.name}</strong> — {product.capacity} · {product.type}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="inquiry-name">Your Name</Label>
            <Input
              id="inquiry-name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-email">Your Email</Label>
            <Input
              id="inquiry-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
            />
          </div>
          <Button type="submit" className="w-full rounded-full gap-2">
            <MessageCircle size={18} /> Send on WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
