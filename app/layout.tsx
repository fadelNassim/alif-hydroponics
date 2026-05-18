import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Alif Hydroponics — L'Alimentation du Bétail de Demain",
  description:
    "Systèmes hydroponiques modulaires d'orge fourragère conçus pour réduire la consommation d'eau de 90 % et fournir 365 jours de nutrition riche en nutriments à votre bétail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body suppressHydrationWarning className={`min-h-full flex flex-col ${inter.className}`}>{children}</body>
    </html>
  );
}
