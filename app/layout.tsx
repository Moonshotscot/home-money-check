import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://homemoneycheck.co.uk"),
  title: {
    default: "Home Money Check | Check deals for your home, money and future",
    template: "%s",
  },
  description:
    "Check household bills, planning, protection and selected business services in one place. Tell us what you want checked and we’ll help you take the next step.",
  openGraph: {
    title: "Home Money Check | Check deals for your home, money and future",
    description:
      "Check household bills, planning, protection and selected business services in one place. Tell us what you want checked and we’ll help you take the next step.",
    type: "website",
  },
  verification: {
    google: "t2pGsW1Iokm3vb9m6HIxCd_2TuFxHSinXfyc7UpLy4U",
  },
  icons: {
    icon: [
      {
        url: "/brand/hmc-tick-icon-purple.png",
        type: "image/png",
      },
    ],
    shortcut: "/brand/hmc-tick-icon-purple.png",
    apple: "/brand/hmc-tick-icon-purple.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
