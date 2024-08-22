import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource-variable/dosis";
import "./globals.css";
import "./responsive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { connectToMongoDB } from "@/lib/db";

export const metadata: Metadata = {
  title: "YouSell - Your Buying and Selling Site",
  description: "Your Buying and Selling Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#00cc82" initialPosition={0.4} height={3} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
