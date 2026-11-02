
import { BUSINESS } from "@/lib/constants";
import { REVIEWS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

export const metadata = { title: "Customer Reviews | Flamingo Events and Rentals Abuja" };

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading eyebrow={`${BUSINESS.reviewCount} Verified Reviews`} title={`Rated ${BUSINESS.rating}/5 on Google`} description="Real feedback from clients who rented flowers, centrepieces, Moroccan lamps, cake stands and more. We keep their wording genuine." />
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-zinc-100 mt-4">
            <div className="flex text-flamingo-gold">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            <span className="text-sm font-medium text-flamingo-deep">{BUSINESS.rating}/5 from {BUSINESS.reviewCount} reviews</span>
            <a href={BUSINESS.googleReviewUrl} target="_blank" className="text-xs bg-flamingo-plum text-white px-3 py-1 rounded-full ml-2">Read on Google</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => <TestimonialCard key={i} review={r} />)}
        </div>
      </section>

      <section className="py-20 bg-flamingo-plum text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl">Join our happy clients across Abuja</h2>
          <p className="mt-4 text-white/70">New, clean, very neat items • Top-notch customer service • Swift delivery</p>
          <a href={`https://wa.me/${BUSINESS.whatsappNumber}`} target="_blank" className="btn-gold mt-8 inline-flex">Enquire on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
