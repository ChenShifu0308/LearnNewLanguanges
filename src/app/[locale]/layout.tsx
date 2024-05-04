import NavBar from "@/components/NavBar";
import ThemeProviders from "@/providers/ThemeProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <div className="w-full h-full md:max-w-7xl md:mx-auto">
              <NavBar />
              <div className="h-[calc(100vh-88px)] w-full max-w-7xl mx-auto">
                {children}
              </div>
            </div>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
