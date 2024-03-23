import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "./component/Footer";
import { NavBar } from "./component/NavBar";
import { Herozental } from "./component/Herozental";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-shop",
  description: "Ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: any;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className},text-slate-700`}>
        <NavBar />

        <main>{children}</main>
        <div className="mt-3">
          <Footer />
        </div>
      </body>
    </html>
  );
}
