
import { Star } from "lucide-react";
import { Review } from "@/lib/data";

export default function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-[20px] p-7 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-zinc-100 h-full flex flex-col">
      <div className="flex text-flamingo-gold mb-4">
        {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-[15px] leading-relaxed text-zinc-700 flex-1">"{review.text}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-flamingo-plum text-white flex items-center justify-center font-serif text-sm">{review.name.charAt(0)}</div>
        <div>
          <div className="font-medium text-sm text-flamingo-deep">{review.name}</div>
          <div className="text-xs text-zinc-500">Verified Google Review</div>
        </div>
      </div>
    </div>
  );
}
