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
    default: "Home Money Check | Better deals for your home, money and future",
    template: "%s",
  },
  description: "Friendly checks for home services, bills, planning and practical money decisions.",
  // TODO before public launch: remove noindex/nofollow and update robots once legal pages and final compliance checks are complete.
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Home Money Check | Better deals for your home, money and future",
    description: "Friendly checks for home services, bills, planning and practical money decisions.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/brand/hmc-tick-icon-transparent.png",
        type: "image/png",
      },
    ],
    shortcut: "/brand/hmc-tick-icon-transparent.png",
    apple: "/brand/hmc-tick-icon-transparent.png",
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
