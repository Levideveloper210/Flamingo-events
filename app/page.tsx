
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { BUSINESS } from "@/lib/constants";
import { getWhatsAppLink, getRentalEnquiryMessage } from "@/lib/whatsapp";
import { RENTAL_CATEGORIES, RENTAL_ITEMS, REVIEWS } from "@/lib/data";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import RentalCard from "@/components/RentalCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Sparkles, Check, ArrowRight, Heart, Star } from "lucide-react";

export default function HomePage() {
  const popular = RENTAL_ITEMS.filter(r => r.popular).slice(0, 6);
  const featuredCats = RENTAL_CATEGORIES.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-flamingo-deep">
        <div className="absolute inset-0">
          <Image src={IMAGES.hero} alt="Luxury wedding decoration in Abuja" fill priority className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-flamingo-deep/90 via-flamingo-deep/60 to-flamingo-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-flamingo-deep/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles size={14} className="text-flamingo-gold" />
              <span className="text-xs tracking-[0.2em] uppercase text-white font-medium">Premium Rentals • Garki, Abuja • 4.9★ Rated</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-7xl font-medium leading-[0.95] text-white">
              Creating Beautiful Moments, <span className="text-flamingo-blushDeep italic font-light">One Event at a Time.</span>
            </h1>
            <p className="mt-8 text-[16px] lg:text-lg leading-relaxed text-white/80 max-w-xl">
              Flamingo Events and Rentals Abuja is your trusted destination for new, clean and very neat event decorations. From super neat flowers to luxurious cake stands, Moroccan lamps and love arches — we make your celebrations memorable.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/rentals" className="btn-gold">
                Explore Our Rentals <ArrowRight size={18} className="ml-2" />
              </Link>
              <a href={getWhatsAppLink("Hello Flamingo Events and Rentals Abuja! I would like to make an enquiry about your event decoration and rental services.")} target="_blank" className="bg-white text-flamingo-deep px-8 py-3.5 rounded-full font-medium hover:bg-flamingo-ivory transition-all inline-flex items-center justify-center shadow-xl">
                Book on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-flamingo-deep bg-flamingo-blush flex items-center justify-center text-flamingo-plum font-serif font-bold">{String.fromCharCode(64+i)}</div>
                ))}
              </div>
              <div className="text-sm text-white/70">
                <div className="flex text-flamingo-gold mb-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                Loved by clients across Abuja for neat, beautiful rentals
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <TrustBar />

      {/* INTRO */}
      <section className="py-20 lg:py-28 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden aspect-[4/4.5] shadow-2xl">
              <Image src={IMAGES.about} alt="Flamingo Events decoration" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-[20px] p-6 shadow-2xl border border-zinc-100 hidden lg:block">
              <div className="text-3xl font-serif font-bold text-flamingo-plum">9+</div>
              <div className="text-xs tracking-widest uppercase text-zinc-500 mt-1">Happy Reviews<br/>4.9 Star Rating</div>
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase font-semibold text-flamingo-royal mb-4">Welcome to Flamingo Events</div>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium leading-tight text-flamingo-deep">Beautiful, Clean & Quality Rentals for Memorable Celebrations</h2>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              At Flamingo Events and Rentals Abuja, we believe every event deserves to be beautiful. Based in Garki, Abuja, we provide premium decoration rentals that are new, clean and very neat — from super neat flowers and beautiful centrepieces to Moroccan lamps, luxurious cake stands, love arches and fabrics for draping.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Our clients love us for top-notch customer service, swift delivery and exceptional presentation. Whether it's a wedding, engagement, proposal, birthday or corporate event, we help you create stunning setups without the stress.
            </p>
            <ul className="mt-8 space-y-3">
              {["New, clean and very neat rental items", "Swift delivery across Abuja", "Top-notch customer service", "Beautiful environment & professional handling"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-700"><span className="w-6 h-6 rounded-full bg-flamingo-plum/10 flex items-center justify-center"><Check size={12} className="text-flamingo-plum" /></span>{item}</li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4">
              <Link href="/about" className="btn-outline">Our Story</Link>
              <Link href="/rentals" className="btn-primary">View Catalogue</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Curated Collection" title="Explore Our Rental Categories" description="From romantic love arches to luxury cake stands, find everything you need for a beautiful event." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredCats.map(cat => <CategoryCard key={cat.slug} cat={cat} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/rentals" className="btn-primary">View All 12 Categories <ArrowRight size={18} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="py-20 lg:py-28 bg-flamingo-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Client Favourites" title="Popular Rental Items" description="Most loved by our clients — new, clean and very neat." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popular.map(item => <RentalCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-flamingo-plum text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flamingo-royal/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-flamingo-blushDeep mb-4">Why Choose Flamingo</div>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight">Trusted for Beautiful, Neat & Quality Rentals in Abuja</h2>
              <div className="mt-10 grid sm:grid-cols-2 gap-8">
                {[
                  { title: "New & Very Neat Items", desc: "Clients consistently mention our items are new, clean and very neat. We maintain premium quality." },
                  { title: "Top-Notch Service", desc: "From enquiry to delivery, expect professional, friendly and swift customer service." },
                  { title: "Swift Delivery", desc: "We deliver swiftly across Garki and Abuja. Your flowers and rentals arrive neat and on time." },
                  { title: "Memorable Setups", desc: "Beautiful environment, luxury cake stands, bright lights and romantic arches that wow guests." },
                ].map(f => (
                  <div key={f.title}>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"><Heart size={18} className="text-flamingo-gold" /></div>
                    <h4 className="font-medium">{f.title}</h4>
                    <p className="text-sm text-white/60 mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:pl-12">
              <div className="rounded-[32px] overflow-hidden aspect-[4/4] bg-white/10 backdrop-blur">
                <Image src={IMAGES.gallery[0]} alt="Event styling" fill className="object-cover opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Inspiration Gallery" title="Beautiful Moments We've Styled" description="A glimpse of elegant setups — floral decorations, centrepieces, proposals and more." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.gallery.slice(0, 8).map((src, i) => (
              <div key={i} className={`relative rounded-[20px] overflow-hidden bg-zinc-100 ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"} group`}>
                <Image src={src} alt={`Gallery ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-20 lg:py-28 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Client Love" title="What Our Clients Say" description={`Rated ${BUSINESS.rating}/5 from ${BUSINESS.reviewCount} reviews on Google. Real feedback from happy clients.`} />
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => <TestimonialCard key={i} review={r} />)}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/testimonials" className="btn-primary">Read All Reviews</Link>
            <a href={BUSINESS.googleReviewUrl} target="_blank" className="btn-outline">Read on Google</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-flamingo-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,122,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="font-serif text-3xl lg:text-5xl text-white leading-tight">Ready to Create a Beautiful Event?</h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">Chat with us on WhatsApp to check availability, get a quote and book your rentals. Open 24 hours, swift response, top-notch service.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppLink("Hello Flamingo Events and Rentals Abuja! I would like to make an enquiry about your rentals and check availability for my event date.")} target="_blank" className="btn-gold">Check Availability on WhatsApp</a>
            <Link href="/booking" className="bg-white text-flamingo-deep px-8 py-3.5 rounded-full font-medium hover:bg-flamingo-ivory transition-colors inline-flex items-center justify-center">Send Enquiry Form</Link>
          </div>
          <div className="mt-8 text-xs text-white/50">{BUSINESS.address} • {BUSINESS.phone}</div>
        </div>
      </section>
    </>
  );
}
