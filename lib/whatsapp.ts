
import { BUSINESS } from "./constants";
export function getWhatsAppLink(message: string, number = BUSINESS.whatsappNumber) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
export function getRentalEnquiryMessage(itemName: string) {
  return `Hello Flamingo Events and Rentals, I am interested in renting ${itemName}. Please let me know its availability and pricing. Thank you!`;
}
