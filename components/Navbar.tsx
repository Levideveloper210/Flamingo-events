
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-flamingo-plum flex items-center justify-center text-white font-serif text-xl font-bold group-hover:scale-105 transition-transform">F</div>
          <div className="leading-tight">
            <div className={`font-serif font-bold text-[16px] tracking-wide ${scrolled ? "text-flamingo-plum" : "text-white"} lg:text-zinc-900`}>FLAMINGO</div>
            <div className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? "text-flamingo-plum/70" : "text-white/80"} lg:text-zinc-500`}>Events & Rentals</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="text-[13px] tracking-widest uppercase font-medium text-zinc-600 hover:text-flamingo-plum transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-sm text-zinc-600 hover:text-flamingo-plum">
            <Phone size={16} /> {BUSINESS.phone}
          </a>
          <a href={getWhatsAppLink("Hello Flamingo Events and Rentals Abuja! I would like to make an enquiry about your event decoration and rental services.")} target="_blank" className="btn-primary text-sm !py-2.5 !px-6">
            Enquire Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full bg-white/90 backdrop-blur text-flamingo-plum shadow">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white shadow-2xl border-t animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-[14px] tracking-widest uppercase font-medium text-zinc-700 border-b border-zinc-100">
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href={getWhatsAppLink("Hello Flamingo Events and Rentals Abuja! I would like to make an enquiry.")} target="_blank" className="btn-primary w-full text-center">Chat on WhatsApp</a>
              <a href="/booking" onClick={() => setOpen(false)} className="btn-outline w-full text-center">Check Availability</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
