
import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { MapPin, Phone, Clock, Instagram, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-flamingo-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-flamingo-plum font-serif text-2xl font-bold">F</div>
              <div>
                <div className="font-serif font-bold tracking-wide">FLAMINGO</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/60">Events & Rentals</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Creating beautiful moments, one event at a time. Premium event decoration rentals in Garki, Abuja. New, clean, very neat items for memorable celebrations.
            </p>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit">
              <div className="flex text-flamingo-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium">{BUSINESS.rating}/5 from {BUSINESS.reviewCount} reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(l => (
                <li key={l.href}><Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
              <li><Link href="/rentals" className="text-white/70 hover:text-white text-sm">Popular Rentals</Link></li>
              <li><Link href="/booking" className="text-white/70 hover:text-white text-sm">Book / Enquire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Rental Categories</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Flowers & Bouquets</li>
              <li>Centrepieces</li>
              <li>Moroccan Lamps</li>
              <li>Luxury Cake Stands</li>
              <li>Backdrops & Love Arches</li>
              <li>Charger Plates & Fabrics</li>
              <li>Neon Lights & Chandeliers</li>
              <li>Plinths & More</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="text-flamingo-gold shrink-0 mt-0.5" /><span className="text-white/70 leading-relaxed">{BUSINESS.address}</span></li>
              <li className="flex gap-3 items-center"><Phone size={18} className="text-flamingo-gold shrink-0" /><a href={`tel:${BUSINESS.phone}`} className="text-white/70 hover:text-white">{BUSINESS.phone}</a></li>
              <li className="flex gap-3 items-center"><Clock size={18} className="text-flamingo-gold shrink-0" /><span className="text-white/70">{BUSINESS.hours}</span></li>
            </ul>
            <div className="mt-8">
              <a href={`https://wa.me/${BUSINESS.whatsappNumber}`} target="_blank" className="btn-gold w-full text-center text-sm">Chat on WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Flamingo Events and Rentals Abuja. All rights reserved.</span>
          <span>Premium event decoration rentals in Abuja • Garki, FCT • Designed for elegance</span>
        </div>
      </div>
    </footer>
  );
}
