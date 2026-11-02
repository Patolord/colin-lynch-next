import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nativeSans = localFont({
  src: "../public/fonts/NativeRecordSans.otf",
  variable: "--font-native-sans",
  display: "swap",
  weight: "400",
});

const nativeSerif = localFont({
  src: "../public/fonts/NativeRecordSerif.otf",
  variable: "--font-native-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Colin Lynch",
  description: "Colin Lynch — music, tour dates, videos and merch.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#27405a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nativeSans.variable} ${nativeSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
