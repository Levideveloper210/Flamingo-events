
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { BUSINESS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/SectionHeading";
import { Check, Heart, Sparkles, Truck } from "lucide-react";

export const metadata = { title: "About Us | Flamingo Events and Rentals Abuja" };

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] tracking-[0.3em] uppercase font-semibold text-flamingo-royal mb-4">About Flamingo Events</div>
            <h1 className="font-serif text-4xl lg:text-6xl font-medium text-flamingo-deep leading-tight">Passion for Beautiful, Memorable Events in Abuja</h1>
            <p className="mt-6 text-zinc-600 leading-relaxed text-lg">Based in Garki, Abuja — trusted for new, clean and very neat decoration rentals and professional customer service.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden aspect-[4/5]">
              <Image src={IMAGES.about2} alt="About Flamingo" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-flamingo-deep leading-tight">We help you celebrate beautifully — without the stress</h2>
            <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
              <p>Flamingo Events and Rentals Abuja was built on a simple belief: every celebration deserves to be beautiful. We provide premium event decoration rentals that look expensive, feel luxurious and photograph beautifully — but with friendly, accessible service.</p>
              <p>Our collection is curated with care: <strong>super neat flowers</strong>, <strong>very new and beautiful centrepieces</strong>, <strong>Moroccan lamps</strong> that clients describe as very, very bright, <strong>luxurious cake stands</strong>, <strong>love arches</strong>, <strong>fabrics for draping</strong>, charger plates, neon lights, chandeliers, plinths and more. Every item is maintained to be clean, neat and ready to impress.</p>
              <p>What sets us apart is our commitment to presentation and customer satisfaction. We don't just rent items — we help you create an environment. Our clients consistently highlight our top-notch customer service, swift delivery and beautiful environment.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="bg-flamingo-ivory rounded-[20px] p-6">
                <Sparkles className="text-flamingo-plum mb-3" />
                <h4 className="font-medium text-flamingo-deep">Quality First</h4>
                <p className="text-sm text-zinc-600 mt-2">New, clean and very neat items — maintained to luxury standards.</p>
              </div>
              <div className="bg-flamingo-ivory rounded-[20px] p-6">
                <Heart className="text-flamingo-plum mb-3" />
                <h4 className="font-medium text-flamingo-deep">Customer Focused</h4>
                <p className="text-sm text-zinc-600 mt-2">Top-notch service, professional handling and genuine care for your event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-flamingo-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Check, title: "Our Promise", text: "Clean, beautiful and quality rental items that elevate your celebration and make your photos stunning." },
              { icon: Truck, title: "Reliable Service", text: "Swift delivery across Abuja, careful handling and clear communication from enquiry to return." },
              { icon: Heart, title: "Your Moment Matters", text: "Whether it's a proposal, wedding, birthday or corporate event — we help make it memorable." },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-zinc-100">
                <div className="w-12 h-12 rounded-full bg-flamingo-plum/10 flex items-center justify-center mb-6"><f.icon className="text-flamingo-plum" size={20} /></div>
                <h3 className="font-serif text-xl text-flamingo-deep">{f.title}</h3>
                <p className="text-sm text-zinc-600 mt-3 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-flamingo-deep text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl">Located in Garki, Serving All of Abuja</h2>
          <p className="mt-6 text-white/70">{BUSINESS.address}. Open 24 hours. Chat with us anytime.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppLink("Hello Flamingo Events! I would like to learn more about your services.")} target="_blank" className="bg-flamingo-gold text-flamingo-deep px-8 py-3.5 rounded-full font-medium">Chat on WhatsApp</a>
            <Link href="/rentals" className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20">Browse Rentals</Link>
          </div>
        </div>
      </section>
    </>
  );
}
