const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(getWhatsAppUrl(message), "_blank");
}
