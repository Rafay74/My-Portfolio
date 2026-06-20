import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import "./globals.css";
import Footer from "./components/footer";
import { ThemeProvider } from "./providers";
import Navbar from "./components/navbar";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Abdul Rafay",
  description: "FullStack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} ${hankenGrotesk.variable} h-screen overflow-hidden antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-between h-screen ">
            {/* LEFT FIXED IMAGE */}
            {/* <div className="lg:w-64 xl:w-80 2xl:w-96 ml-20 mt-20 ">
              <Image
                src={portfolio_image}
                alt="logo"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div> */}
            {/* SCROLLABLE CENTER */}
            <div className="flex-1 overflow-y-auto ">
              <div className="mx-auto flex min-h-screen max-w-4xl flex-col py-2">
                <Navbar />

                <main className="flex-1">{children}</main>

                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
