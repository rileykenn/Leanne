import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";

/* Body: neutral sans. Display: a refined serif echoing the business card's
   wordmark. Script: the brush script from the DIY Divorce flyer. */
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zampa Services | Divorce Made Simple, No Lawyer Needed",
  description:
    "Affordable divorce assistance, licensed process serving and Justice of the Peace witnessing. Illawarra based with over 30 years' legal experience. Services from $59.",
  keywords: [
    "divorce assistance",
    "process server",
    "Justice of the Peace",
    "Illawarra",
    "Zampa Services",
    "divorce application",
    "licensed process server",
    "document witnessing",
  ],
  openGraph: {
    title: "Zampa Services | Divorce Made Simple, No Lawyer Needed",
    description:
      "Affordable divorce assistance, process serving and JP witnessing. 30+ years' experience in the Illawarra.",
    type: "website",
    url: "https://zampaservices.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${allura.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
