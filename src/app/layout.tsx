import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";


const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finagotchi",
  description: "SHADOW WIZARD MONEY GANG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={figtree.className}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
