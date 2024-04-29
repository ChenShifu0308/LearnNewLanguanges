import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviders from "@/providers/ThemeProvider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Languages compare and learn",
  description: "Learn multiple languages with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <div className="w-full h-full p-2 md:max-w-7xl md:mx-auto md:p-4">
            <NavBar />
            {children}
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
