
"use client";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

type Props = { presetItem?: string };

export default function EnquiryForm({ presetItem }: Props) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    items: presetItem || "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Flamingo Events and Rentals Abuja!%0A%0A*NEW ENQUIRY - WEBSITE*%0A%0A*Name:* ${form.fullName}%0A*Phone:* ${form.phone}%0A*Event Type:* ${form.eventType}%0A*Event Date:* ${form.eventDate}%0A*Event Location:* ${form.eventLocation}%0A${form.guestCount ? `*Guest Count:* ${form.guestCount}%0A` : ""}*Items/Services Needed:* ${form.items}%0A${form.additionalInfo ? `*Additional Details:* ${form.additionalInfo}%0A` : ""}%0A%0APlease confirm availability and pricing. Thank you!`;
    window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[28px] p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-zinc-100">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Full Name *</label>
          <input required name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your full name" className="w-full rounded-full border border-zinc-200 px-5 py-3.5 text-sm focus:outline-none focus:border-flamingo-plum focus:ring-2 focus:ring-flamingo-plum/10" />
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Phone / WhatsApp *</label>
          <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+234 ..." className="w-full rounded-full border border-zinc-200 px-5 py-3.5 text-sm focus:outline-none focus:border-flamingo-plum focus:ring-2 focus:ring-flamingo-plum/10" />
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Event Type *</label>
          <select required name="eventType" value={form.eventType} onChange={handleChange} className="w-full rounded-full border border-zinc-200 px-5 py-3.5 text-sm focus:outline-none focus:border-flamingo-plum bg-white">
            <option value="">Select event type</option>
            <option>Wedding</option>
            <option>Engagement</option>
            <option>Proposal</option>
            <option>Birthday</option>
            <option>Corporate Event</option>
            <option>Baby Shower</option>
            <option>Bridal Shower</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Event Date *</label>
          <input required type="date" name="eventDate" value={form.eventDate} onChange={handleChange} className="w-full rounded-full border border-zinc-200 px-5 py-3.5 text-sm focus:outline-none focus:border-flamingo-plum" />
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Event Location *</label>
          <input required name="eventLocation" value={form.eventLocation} onChange={handleChange} placeholder="Garki, Abuja" className="w-full rounded-full border border-zinc-200 px-5 py-3.5 text-sm focus:outline-none focus:border-flamingo-plum" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Guest Count (optional)</label>
          <input name="guestCount" value={form.guestCount} onChange={handleChange} placeholder="e.g. 100 guests" className="w-full rounded-full border border-zinc-200 px-5 py-3.5 text-sm focus:outline-none focus:border-flamingo-plum" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Rental Items / Services Required *</label>
          <textarea required name="items" value={form.items} onChange={handleChange} rows={3} placeholder="e.g. Gold crystal centrepieces, Moroccan lamps, floral backdrop..." className="w-full rounded-[20px] border border-zinc-200 px-5 py-4 text-sm focus:outline-none focus:border-flamingo-plum resize-none" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs tracking-widest uppercase font-semibold text-zinc-500 mb-2 block">Additional Information</label>
          <textarea name="additionalInfo" value={form.additionalInfo} onChange={handleChange} rows={3} placeholder="Any extra details about your event theme, colours, budget..." className="w-full rounded-[20px] border border-zinc-200 px-5 py-4 text-sm focus:outline-none focus:border-flamingo-plum resize-none" />
        </div>
      </div>
      <button type="submit" className="btn-primary w-full mt-8 text-center justify-center">Check Availability & Get a Quote on WhatsApp</button>
      <p className="text-xs text-zinc-500 text-center mt-4">Availability and pricing will be confirmed by our team on WhatsApp. No payment required now.</p>
    </form>
  );
}
