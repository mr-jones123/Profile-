import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable : "--font-inter"
})

const gambetta = localFont({
  src : "./fonts/Gambetta-Variable.ttf",
  variable : "--font-gambetta"
})
export const metadata: Metadata = {
  title: "xy.",
  description: "myPortfolio",
  icons: {
    icon:[
      '/favicon.ico'
    ],
    apple : [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest : '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body
        className={`${gambetta.className} ${inter.className} } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
