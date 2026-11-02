
"use client";
import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import SectionHeading from "@/components/SectionHeading";

const FILTERS = [
  { slug: "all", label: "All" },
  { slug: "floral", label: "Floral Decorations" },
  { slug: "centrepieces", label: "Centrepieces" },
  { slug: "wedding", label: "Wedding Decorations" },
  { slug: "proposal", label: "Proposal Setups" },
  { slug: "backdrops", label: "Backdrops" },
  { slug: "table", label: "Table Decorations" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("all");

  // For demo, all images show for all filters — easy to replace with real tagged images
  const images = IMAGES.gallery;

  return (
    <>
      <section className="pt-32 pb-12 bg-flamingo-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Inspiration Gallery" title="Elegant Setups & Rental Inspiration" description="Tasteful, relevant inspiration images. Replace easily with Flamingo's real event photos — images are centralized in lib/images.ts. Stock images are not presented as Flamingo's previous events." />
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map(f => (
              <button key={f.slug} onClick={() => setActive(f.slug)} className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${active === f.slug ? "bg-flamingo-plum text-white border-flamingo-plum shadow" : "bg-white text-zinc-600 border-zinc-200 hover:border-flamingo-plum"}`}>{f.label}</button>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-500 mt-6 max-w-2xl mx-auto">Note: Images shown are temporary inspiration placeholders to demonstrate layout. Replace them in <code className="bg-white px-2 py-1 rounded">lib/images.ts</code> with Flamingo's actual photographs. We do not claim these are Flamingo's previous events.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, i) => (
              <div key={i} className="relative rounded-[20px] overflow-hidden bg-zinc-100 break-inside-avoid group">
                <Image src={src} alt={`Gallery ${i}`} width={800} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {/* duplicate to fill masonry */}
            {images.slice(0, 6).map((src, i) => (
              <div key={`dup-${i}`} className="relative rounded-[20px] overflow-hidden bg-zinc-100 break-inside-avoid group">
                <Image src={src} alt={`Gallery dup ${i}`} width={800} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
