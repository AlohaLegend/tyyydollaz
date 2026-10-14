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
  title: "TY$ — backwood wrappers",
  description: "Astronaut Status. Listen to backwood wrappers, the latest release from shiire and TY$.",
  openGraph: {
    title: "TY$ — backwood wrappers",
    description: "The latest signal from shiire and TY$.",
    type: "website",
    images: [{ url: "/media/backwood-wrappers.jpg", width: 640, height: 640, alt: "backwood wrappers by shiire and TY$." }],
  },
  twitter: {
    card: "summary",
    title: "TY$ — backwood wrappers",
    description: "The latest signal from shiire and TY$.",
    images: ["/media/backwood-wrappers.jpg"],
  },
  icons: {
    icon: "/media/backwood-wrappers.jpg",
    shortcut: "/media/backwood-wrappers.jpg",
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
