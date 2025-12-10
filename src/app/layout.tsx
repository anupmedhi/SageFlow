import type { Metadata } from "next";
import { Inter, Outfit, Roboto } from "next/font/google"; // Import Roboto
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "SageFlow - Student Wellbeing",
  description: "A premium student wellbeing and weekly assessment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
