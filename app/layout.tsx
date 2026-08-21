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
  metadataBase: new URL("https://tyyydollaz.liammoherlihy.chatgpt.site"),
  title: "TY$ — Fell In Luv",
  description: "Astronaut Status. Listen to Fell In Luv, the debut single from TY$.",
  openGraph: {
    title: "TY$ — Fell In Luv",
    description: "Astronaut Status. Listen to the debut single from TY$.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "TY$ — Fell In Luv. Astronaut Status." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TY$ — Fell In Luv",
    description: "Astronaut Status. Listen to the debut single from TY$.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/media/fell-in-luv.jpg",
    shortcut: "/media/fell-in-luv.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
