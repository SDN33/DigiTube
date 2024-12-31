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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DigiTube",
  },
  twitter: {
    card: "summary_large_image",
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
