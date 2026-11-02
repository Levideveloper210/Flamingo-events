
import { BUSINESS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = { title: "Contact Us | Flamingo Events and Rentals Abuja" };

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase font-semibold text-flamingo-royal mb-4">Contact Flamingo Events</div>
            <h1 className="font-serif text-4xl lg:text-5xl font-medium text-flamingo-deep leading-tight">We are here to make your event beautiful</h1>
            <p className="mt-6 text-zinc-600 leading-relaxed">Open 24 hours, swift response, top-notch service. Reach us on WhatsApp for fastest response or send an enquiry form.</p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center shrink-0"><MapPin className="text-flamingo-plum" size={20} /></div>
                <div>
                  <div className="font-medium text-flamingo-deep">Visit Us</div>
                  <div className="text-sm text-zinc-600 mt-1 leading-relaxed">{BUSINESS.address}</div>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`} target="_blank" className="text-sm text-flamingo-plum mt-2 inline-block hover:underline">Get Directions →</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center shrink-0"><Phone className="text-flamingo-plum" size={20} /></div>
                <div>
                  <div className="font-medium text-flamingo-deep">Call / WhatsApp</div>
                  <a href={`tel:${BUSINESS.phone}`} className="text-sm text-zinc-600 mt-1 block hover:text-flamingo-plum">{BUSINESS.phone}</a>
                  <a href={getWhatsAppLink("Hello Flamingo Events and Rentals Abuja! I would like to make an enquiry.")} target="_blank" className="text-sm text-flamingo-plum mt-2 inline-flex items-center gap-2"><MessageCircle size={14} /> Chat on WhatsApp</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center shrink-0"><Clock className="text-flamingo-plum" size={20} /></div>
                <div>
                  <div className="font-medium text-flamingo-deep">Opening Hours</div>
                  <div className="text-sm text-zinc-600 mt-1">{BUSINESS.hours} • Swift response</div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-[20px] p-6 border border-zinc-100 shadow-sm">
              <div className="text-sm font-medium text-flamingo-deep mb-3">Quick Actions</div>
              <div className="flex flex-wrap gap-3">
                <a href={getWhatsAppLink("Hello! I would like to check availability for my event.")} target="_blank" className="btn-primary text-sm !py-2.5">Chat on WhatsApp</a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`} target="_blank" className="btn-outline text-sm !py-2.5">Get Directions</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-zinc-100">
            <div className="h-64 bg-zinc-100 relative">
              <iframe title="Map" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&z=15&output=embed`} />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-xl text-flamingo-deep">Find us in Garki, Abuja</h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">We are centrally located in Area 2, Garki, with easy access across Abuja. Delivery available across FCT.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-zinc-500">
                <div>• Garki</div><div>• Wuse</div><div>• Maitama</div><div>• Asokoro</div><div>• Central Area</div><div>• And more</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-flamingo-deep">Send an Enquiry</h2>
            <p className="text-sm text-zinc-600 mt-3">Fill the form — it opens WhatsApp with your details for fast confirmation.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
