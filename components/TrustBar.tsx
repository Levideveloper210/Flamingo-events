
import { Star, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-flamingo-ivory flex items-center justify-center">
            <div className="flex text-flamingo-gold"><Star size={16} fill="currentColor" /></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-flamingo-deep">{BUSINESS.rating}/5</span>
              <span className="text-sm text-zinc-500">Google Rating</span>
            </div>
            <div className="text-xs text-zinc-500">{BUSINESS.reviewCount} verified reviews • Trusted in Abuja</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 text-sm">
          <span className="flex items-center gap-2 text-zinc-600"><ShieldCheck size={18} className="text-flamingo-plum" /> New, Clean & Neat Items</span>
          <span className="flex items-center gap-2 text-zinc-600"><Truck size={18} className="text-flamingo-plum" /> Swift Delivery in Abuja</span>
          <span className="flex items-center gap-2 text-zinc-600"><Sparkles size={18} className="text-flamingo-plum" /> Top-notch Service</span>
        </div>
      </div>
    </div>
  );
}
