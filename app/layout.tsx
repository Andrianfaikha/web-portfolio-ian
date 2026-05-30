import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Andrian Faikha's Web Portfolio",
  description: "A creative portfolio and editorial experience showcase by Andrian Faikha, a Product Manager, UI/UX Designer, and Frontend Developer specializing in brutalist minimalism and luxurious digital products.",
  keywords: ["Product Manager", "UI/UX Designer", "Frontend Developer", "Next.js Portfolio", "Brutalist Design", "Creative Portfolio"],
  authors: [{ name: "Andrian Faikha" }],
  openGraph: {
    title: "Andrian Faikha's Web Portfolio",
    description: "A creative portfolio and editorial experience showcase by Andrian Faikha",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
