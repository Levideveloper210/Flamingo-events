
"use client";
import { useState, useMemo } from "react";
import { RENTAL_CATEGORIES, RENTAL_ITEMS } from "@/lib/data";
import RentalCard from "@/components/RentalCard";
import SectionHeading from "@/components/SectionHeading";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RentalsContent() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") || "all";
  const [active, setActive] = useState(initial);

  const filtered = useMemo(() => {
    if (active === "all") return RENTAL_ITEMS;
    return RENTAL_ITEMS.filter(i => i.category === active);
  }, [active]);

  return (
    <>
      <section className="pt-32 pb-12 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Rental Catalogue" title="Beautiful, Clean & Quality Rentals" description="Browse by category. Every item shows Request a Quote — availability and pricing confirmed by our team on WhatsApp." />
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => setActive("all")} className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${active === "all" ? "bg-flamingo-plum text-white border-flamingo-plum shadow" : "bg-white text-zinc-600 border-zinc-200 hover:border-flamingo-plum"}`}>All Items ({RENTAL_ITEMS.length})</button>
            {RENTAL_CATEGORIES.map(cat => (
              <button key={cat.slug} onClick={() => setActive(cat.slug)} className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${active === cat.slug ? "bg-flamingo-plum text-white border-flamingo-plum shadow" : "bg-white text-zinc-600 border-zinc-200 hover:border-flamingo-plum"}`}>{cat.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-sm text-zinc-500 mb-6">{filtered.length} items • Request a Quote • Availability confirmed on WhatsApp</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(item => <RentalCard key={item.id} item={item} />)}
          </div>
          {filtered.length === 0 && <div className="text-center py-20 text-zinc-500">No items in this category yet. Chat with us for more options.</div>}
        </div>
      </section>

      <section className="py-16 bg-flamingo-cream border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl text-flamingo-deep">Can't find what you need?</h3>
          <p className="text-sm text-zinc-600 mt-3">We have more items including fabrics, charger plates, plinths and custom pieces. Chat with us to see full stock.</p>
          <a href={`https://wa.me/2349114540253?text=${encodeURIComponent("Hello Flamingo Events! I am looking for a rental item not listed on the website. Can you share your full catalogue?")}`} target="_blank" className="btn-primary mt-6 inline-flex">Ask for Full Catalogue</a>
        </div>
      </section>
    </>
  );
}

export default function RentalsPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 text-center">Loading rentals...</div>}>
      <RentalsContent />
    </Suspense>
  );
}
