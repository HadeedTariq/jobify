import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/lib/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jobify",
  description: "Jobify your path for finding any type of job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
