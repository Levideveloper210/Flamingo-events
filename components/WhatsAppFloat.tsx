
"use client";
import { BUSINESS } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hello Flamingo Events and Rentals Abuja! I would like to make an enquiry about your rentals.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 text-white fill-white">
        <path d="M19.05 4.94A9.91 9.91 0 0 0 12.03 2C6.54 2 2.07 6.45 2.07 11.94c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.72 1.2h.01c5.49 0 9.96-4.45 9.96-9.93a9.86 9.86 0 0 0-2.89-6.95Zm-7.02 15.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.23 8.23 0 0 1-1.27-4.33c0-4.54 3.7-8.23 8.26-8.23a8.2 8.2 0 0 1 5.8 2.4 8.17 8.17 0 0 1 2.41 5.8c0 4.54-3.7 8.23-8.21 8.23Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      <span className="absolute right-full mr-3 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Chat with us</span>
    </a>
  );
}
