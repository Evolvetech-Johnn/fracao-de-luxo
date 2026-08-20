import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { TrackingScripts } from "@/components/TrackingScripts";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fracoesdeluxo.com.br'),
  title: "Frações de Luxo",
  description: "Descubra seu perfume favorito antes de gastar em um frasco",
  openGraph: {
    title: "Frações de Luxo",
    description: "Descubra seu perfume favorito antes de gastar em um frasco",
    url: "/",
    siteName: "Frações de Luxo",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Frações de Luxo (Substitua por arte final antes de rodar tráfego pago)",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
