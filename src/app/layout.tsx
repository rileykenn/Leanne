import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zampa Services | Divorce Made Simple — No Lawyer Needed",
  description:
    "Affordable divorce assistance, licensed process serving, and Justice of the Peace witnessing. Illawarra based with over 30 years legal experience. Services starting from $100.",
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
    title: "Zampa Services | Divorce Made Simple — No Lawyer Needed",
    description:
      "Affordable divorce assistance, process serving, and JP witnessing. 30+ years experience in the Illawarra.",
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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
