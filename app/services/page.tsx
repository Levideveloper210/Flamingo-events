
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { BUSINESS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Services | Flamingo Events and Rentals Abuja" };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Our Services" title="Event Decoration & Premium Rentals" description="Beautiful, cohesive styling for weddings, proposals, birthdays and corporate events in Abuja." />
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map(s => (
            <div key={s.slug} className="group bg-white rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-zinc-100 card-hover">
              <div className="relative h-64 overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 right-6 font-serif text-2xl text-white leading-tight">{s.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-zinc-600 leading-relaxed">{s.description}</p>
                <div className="mt-6 flex gap-3">
                  <a href={getWhatsAppLink(`Hello Flamingo Events and Rentals, I am interested in ${s.title}. Please share more details and pricing.`)} target="_blank" className="text-sm font-medium text-flamingo-plum border border-flamingo-plum/20 px-5 py-2.5 rounded-full hover:bg-flamingo-plum hover:text-white transition-colors">Enquire</a>
                  <Link href="/rentals" className="text-sm text-zinc-500 hover:text-flamingo-plum px-2 py-2.5">View Rentals →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-flamingo-plum text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl">Need a custom setup?</h2>
          <p className="mt-4 text-white/70">Tell us your event type, date and vision — we will recommend the perfect rental mix.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href={getWhatsAppLink("Hello! I need a custom decoration setup for my event. Can you help?")} target="_blank" className="bg-flamingo-gold text-flamingo-deep px-8 py-3.5 rounded-full font-medium">Chat on WhatsApp</a>
            <Link href="/booking" className="bg-white text-flamingo-deep px-8 py-3.5 rounded-full font-medium">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
