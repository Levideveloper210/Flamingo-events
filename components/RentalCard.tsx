
"use client";
import Image from "next/image";
import { RentalItem } from "@/lib/data";
import { getWhatsAppLink, getRentalEnquiryMessage } from "@/lib/whatsapp";

export default function RentalCard({ item }: { item: RentalItem }) {
  const msg = getRentalEnquiryMessage(item.name);
  return (
    <div className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-zinc-100 card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-flamingo-ivory">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] tracking-wide uppercase font-medium text-flamingo-plum shadow">{item.categoryLabel}</span>
          {item.popular && <span className="bg-flamingo-plum text-white px-3 py-1 rounded-full text-[11px] tracking-wide uppercase font-medium shadow">Popular</span>}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-medium text-flamingo-deep leading-tight">{item.name}</h3>
        <p className="text-sm text-zinc-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs tracking-widest uppercase text-zinc-400">Request a Quote</span>
          <a href={getWhatsAppLink(msg)} target="_blank" className="text-sm font-medium text-flamingo-plum hover:text-flamingo-royal border border-flamingo-plum/20 hover:border-flamingo-plum px-4 py-2 rounded-full transition-colors">
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
