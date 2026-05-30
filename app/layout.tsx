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
  title: "Ian's Portfolio",
  description: "A premium modern creative portfolio and editorial experience showcase for Ian, a Product Manager, UI/UX Designer, and Frontend Developer specializing in brutalist minimalism and luxurious digital products.",
  keywords: ["Product Manager", "UI/UX Designer", "Frontend Developer", "Next.js Portfolio", "Brutalist Design", "Creative Portfolio"],
  authors: [{ name: "Ian" }],
  openGraph: {
    title: "Ian — Creative Developer & UI/UX Designer",
    description: "A premium modern creative portfolio and editorial experience showcase for Ian.",
    type: "website",
    locale: "en_US",
  },
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
