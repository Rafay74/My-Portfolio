import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";

import "./globals.css";
import Footer from "./components/footer";
import { ThemeProvider } from "./providers";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: "variable",
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
      <body className={`${hostGrotesk.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" max-w-4xl mx-auto min-h-screen  py-2  flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
