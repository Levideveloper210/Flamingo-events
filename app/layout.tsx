
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { BUSINESS } from "@/lib/constants";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Premium Event Decoration Rentals in Abuja`,
  description: "Flamingo Events and Rentals Abuja - New, clean & beautiful event decoration rentals. Flowers, centrepieces, Moroccan lamps, cake stands, backdrops, love arches, charger plates & more in Garki, Abuja. 4.9/5 rated.",
  keywords: ["event rentals Abuja", "wedding decorations Abuja", "centrepieces Abuja", "Moroccan lamps Abuja", "event planner Abuja", "Flamingo Events"],
  openGraph: {
    title: BUSINESS.name,
    description: "Creating Beautiful Moments, One Event at a Time. Premium rentals in Abuja.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
