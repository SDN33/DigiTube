import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DigiTube",
    url: "https://digitube.buzz",
    title: "DigiTube | Acheter vues YouTube, likes, abonnés",
    description: "Boostez votre chaîne YouTube avec DigiTube. Achetez des vues, des likes, des abonnés pour vos vidéos.",
    images: [
      {
        url: "https://digitube.buzz/banner.png",
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
      url: "https://digitube.buzz/banner.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
