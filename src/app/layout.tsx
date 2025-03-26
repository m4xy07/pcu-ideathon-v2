import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCU's Ideathon",
  description: "PCU's Ideathon 2.0 - 2K25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/images/Ideathon_Logo_White.png",
          },
          baseTheme: dark,
        }}
      >
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
      </ClerkProvider>
    </html>
  );
}
