import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://homemoneycheck.co.uk"),
  title: {
    default: "Home Money Check | See how much you could save",
    template: "%s",
  },
  description:
    "Get a free Home Money Check for your gas, electricity and broadband. We check the available deals, savings, cashback and switching support for your household.",
  openGraph: {
    title: "Home Money Check | See how much you could save",
    description:
      "Get a free Home Money Check for your gas, electricity and broadband. We check the available deals, savings, cashback and switching support for your household.",
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
      <body className={`${fraunces.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
