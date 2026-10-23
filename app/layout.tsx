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
  metadataBase: new URL("https://alohalegend.github.io/tyyydollaz/"),
  title: "TY$ — everlasting ice",
  description: "Astronaut Status. Listen to everlasting ice, the new single from TY$ featuring shiire.",
  openGraph: {
    title: "TY$ — everlasting ice",
    description: "Transmission 003. The new single from TY$ featuring shiire.",
    type: "website",
    images: [{ url: "/media/everlasting-ice.jpg", width: 640, height: 640, alt: "everlasting ice by TY$ featuring shiire." }],
  },
  twitter: {
    card: "summary",
    title: "TY$ — everlasting ice",
    description: "Transmission 003. The new single from TY$ featuring shiire.",
    images: ["/media/everlasting-ice.jpg"],
  },
  icons: {
    icon: "/media/everlasting-ice.jpg",
    shortcut: "/media/everlasting-ice.jpg",
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
