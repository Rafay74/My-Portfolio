import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import "./globals.css";
import Footer from "./components/footer";
import GridBackground from "./components/grid-background";
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
        className={`${hankenGrotesk.className} ${hankenGrotesk.variable} min-h-dvh antialiased md:h-dvh md:overflow-hidden `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <GridBackground />
          <div className="relative z-10 flex h-full min-h-dvh md:h-dvh ">
            <div
              id="page-scroll"
              className="flex-1 overflow-x-hidden overflow-y-auto"
            >
              <div className="mx-auto flex min-h-dvh max-w-4xl flex-col px-4 pb-8 pt-2 sm:px-6 md:pb-2">
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
