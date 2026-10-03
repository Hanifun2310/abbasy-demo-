import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbasy | Premium Chicken Restaurant",
  description: "Experience the best crispy chicken at Abbasy. Order online now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans scroll-smooth h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900 selection:bg-[#E31837] selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
