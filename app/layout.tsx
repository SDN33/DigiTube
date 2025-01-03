import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigiTube | Acheter vues YouTube, likes, abonnés",
  description: "Boostez votre chaîne YouTube avec DigiTube. Achetez des vues, des likes, des abonnés pour vos vidéos.",
  metadataBase: new URL("https://digitube.buzz"),
  keywords: [
    "YouTube",
    "promotion YouTube",
    "promo YouTube",
    "vues youtube",
    "likes",
    "abonnés youtube",
    "DigiTube",
    "acheter vues YouTube",
    "likes YouTube",
    "abonnés YouTube",
    "vues réelles YouTube",
    "acheter vues YouTube pas cher",
    "acheter des vues YouTube",
    "vues YouTube pas cher",
    "acheter des likes YouTube",
    "likes YouTube pas cher",
    "acheter vues YouTube pas cher",

  ],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://digitube.buzz",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DigiTube",
    url: "https://digitube.buzz",
    title: "DigiTube | Acheter vues YouTube, likes, abonnés",
    description: "Boostez votre chaîne YouTube avec DigiTube. Achetez des vues, des likes, des abonnés pour vos vidéos.",
    images: [
      {
        url: "https://digitube.buzz/images/banner.png",
        width: 1200,
        height: 630,
        alt: "DigiTube | Acheter vues YouTube, likes, abonnés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitube",
    title: "DigiTube | Acheter vues YouTube, likes, abonnés",
    description: "Boostez votre chaîne YouTube avec DigiTube. Achetez des vues, des likes, des abonnés pour vos vidéos.",
    images: {
      url: "https://digitube.buzz/images/banner.png",
      alt: "DigiTube | Acheter vues YouTube, likes, abonnés",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
