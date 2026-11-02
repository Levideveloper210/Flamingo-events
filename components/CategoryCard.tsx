
import Image from "next/image";
import Link from "next/link";
import { RentalCategory } from "@/lib/data";

export default function CategoryCard({ cat }: { cat: RentalCategory }) {
  return (
    <Link href={`/rentals?category=${cat.slug}`} className="group relative rounded-[24px] overflow-hidden aspect-[4/3.2] bg-flamingo-ivory shadow-[0_8px_30px_rgba(0,0,0,0.06)] card-hover block">
      <Image src={cat.image} alt={cat.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="font-serif text-xl font-medium leading-tight">{cat.label}</h3>
        <p className="text-sm text-white/70 mt-2 line-clamp-2 leading-relaxed">{cat.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-flamingo-deep transition-all">Explore</div>
      </div>
    </Link>
  );
}
