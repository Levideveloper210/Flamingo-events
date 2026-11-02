
import EnquiryForm from "@/components/EnquiryForm";
import { BUSINESS } from "@/lib/constants";
import { Check } from "lucide-react";

export const metadata = { title: "Book / Enquire | Flamingo Events and Rentals Abuja" };

export default function BookingPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="text-[11px] tracking-[0.3em] uppercase font-semibold text-flamingo-royal mb-4">Booking & Enquiry</div>
            <h1 className="font-serif text-4xl lg:text-5xl text-flamingo-deep leading-tight">Check Availability & Get a Quote</h1>
            <p className="mt-6 text-zinc-600 leading-relaxed">Tell us about your event and the rentals you need. Your details will open in WhatsApp for our team to confirm availability and pricing. No payment required now — booking is confirmed by our team.</p>

            <div className="mt-10 space-y-4 bg-white rounded-[20px] p-6 border border-zinc-100 shadow-sm">
              <div className="font-medium text-flamingo-deep text-sm">How it works</div>
              {[
                "Fill your event details and rental items",
                "Click to send — opens WhatsApp with prefilled message",
                "We confirm availability & pricing swiftly",
                "Delivery in Garki & across Abuja",
              ].map((step, i) => (
                <div key={i} className="flex gap-3 text-sm text-zinc-600"><span className="w-6 h-6 rounded-full bg-flamingo-plum text-white flex items-center justify-center text-xs shrink-0">{i+1}</span>{step}</div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="flex items-center gap-2"><Check size={14} className="text-flamingo-plum" /> Open 24 hours</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-flamingo-plum" /> Swift response</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-flamingo-plum" /> 4.9★ rated</span>
            </div>
          </div>

          <div>
            <EnquiryForm />
            <div className="mt-6 bg-flamingo-plum text-white rounded-[20px] p-6">
              <div className="font-serif text-lg">Need quick help?</div>
              <p className="text-sm text-white/70 mt-2">Chat directly on WhatsApp for fastest response.</p>
              <a href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hello Flamingo Events and Rentals Abuja! I would like to check availability for my event.")}`} target="_blank" className="btn-gold mt-4 w-full text-center">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
