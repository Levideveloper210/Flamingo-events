
# Flamingo Events and Rentals Abuja — Premium Website

A luxury, high-converting website for **Flamingo Events and Rentals Abuja** — event decoration rentals based in Garki, Abuja, Nigeria.

**Live Brand:** Deep plum #4A235A, Champagne gold #D4AF7A, Blush pink #FDE6E8, Ivory #FFFBF7
**Rating:** 4.9/5 from 9 Google reviews
**WhatsApp:** +234 911 454 0253

## Features

- **Premium Design:** Elegant typography (Playfair Display + Inter), generous spacing, rounded cards, subtle animations
- **8 Pages:** Home, About, Services, Rentals Catalogue (12 categories, 30+ items), Gallery, Reviews, Booking/Enquiry, Contact
- **Conversion Focused:** Floating WhatsApp, enquiry buttons with prefilled messages, trust bar, testimonials, Request a Quote
- **WhatsApp Integration:** All buttons use `wa.me/2349114540253?text=...` with item-specific messages
- **Fully Responsive:** Mobile, tablet, desktop
- **No Backend Required:** Enquiry form opens WhatsApp with formatted message
- **Easy Image Replacement:** All images centralized in `lib/images.ts` and `lib/data.ts`
- **SEO Ready:** Metadata, heading hierarchy, semantic HTML

## Tech Stack

- Next.js 14 with App Router
- React 18 + TypeScript
- Tailwind CSS
- Lucide Icons
- Optimized Images (Unsplash remote patterns)

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure

```
app/
  layout.tsx          # Fonts, Navbar, Footer, WhatsApp float
  page.tsx            # Home - hero, trust, intro, categories, popular, why us, gallery, reviews, CTA
  globals.css         # Tailwind + custom utilities
  about/page.tsx
  services/page.tsx
  rentals/page.tsx    # Filterable catalogue (client component)
  gallery/page.tsx    # Masonry inspiration gallery
  testimonials/page.tsx
  booking/page.tsx    # Enquiry form → WhatsApp
  contact/page.tsx    # Map + contact + form
components/
  Navbar.tsx, Footer.tsx, WhatsAppFloat.tsx, RentalCard.tsx, CategoryCard.tsx, TestimonialCard.tsx, TrustBar.tsx, EnquiryForm.tsx, SectionHeading.tsx
lib/
  constants.ts        # Business info, nav links, phone, address
  images.ts           # ALL image URLs - replace with real photos here
  data.ts             # Rental categories, rental items, services, reviews
  whatsapp.ts         # Helper to build wa.me links
```

## Image Replacement

1. Open `lib/images.ts` — replace `hero`, `categories.*`, `gallery[]` URLs with your real photos (upload to `/public` or use CDN)
2. Open `lib/data.ts` — update `RENTAL_ITEMS[].image` with real item photos
3. For best results, use 800x600 or 4:3 ratio, <500KB, WebP/JPG

If you upload to `public/images/`, reference as `/images/your-photo.jpg` (no need for remotePatterns).

## WhatsApp Setup

Number is defined in `lib/constants.ts` as `2349114540253`. All buttons use:

```
https://wa.me/2349114540253?text=EncodedMessage
```

For rentals:
> Hello Flamingo Events and Rentals, I am interested in renting [ITEM NAME]. Please let me know its availability and pricing.

For booking form, all fields are formatted into a WhatsApp message.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Flamingo Events and Rentals Abuja - premium website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/flamingo-events-abuja.git
git push -u origin main
```

## Deploy to Vercel

1. Go to vercel.com → New Project → Import your GitHub repo
2. Framework: Next.js (auto-detected)
3. Build Command: `npm run build`
4. No env vars needed
5. Deploy — Vercel will give you a live URL

Custom domain: Add `flamingoeventsabuja.com` in Vercel → Settings → Domains.

## Google Reviews Link

Replace placeholder `#` in `lib/constants.ts` → `BUSINESS.googleReviewUrl` with your actual Google review link:
`https://www.google.com/maps/search/?api=1&query=...` or your Google Business review URL.

## Checklist Before Launch

- [ ] Replace image URLs in `lib/images.ts` with real Flamingo photos
- [ ] Update Google review link in `lib/constants.ts`
- [ ] Test all WhatsApp buttons on mobile
- [ ] Test enquiry form → WhatsApp message formatting
- [ ] Verify phone +234 911 454 0253 and address
- [ ] Run `npm run build` — no errors

## Contact

Flamingo Events and Rentals Abuja
Area 2, Block 4, Flat 3, Ajaokuta Street, Garki, Abuja 900001
+234 911 454 0253 — Open 24 hours

Built as a premium, conversion-focused website — ready for GitHub & Vercel.
