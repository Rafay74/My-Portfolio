import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";

import "./globals.css";
import Footer from "./components/footer";
import { ThemeProvider } from "./providers";
import Navbar from "./components/navbar";

import portfolio_image from "@/public/portfolio_me.png";
import Image from "next/image";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "Abdul Rafay",
  description: "FullStack Engineer",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${hostGrotesk.className} antialiased`}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className=" max-w-4xl mx-auto min-h-screen py-2  flex flex-col">
//             <Navbar />
//             <main className="flex-1">{children}</main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-between h-screen ">
            {/* LEFT FIXED IMAGE */}
            <div className="lg:w-64 xl:w-80 2xl:w-96 ml-20 mt-20 ">
              <Image
                src={portfolio_image}
                alt="logo"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
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
