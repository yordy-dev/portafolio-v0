import Navbar from "@/components/shared/navbar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { personalData } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Yordy Almerco | Redes y soporte TI",
    template: `%s | ${personalData.name}`,
  },
  description: personalData.description,
  openGraph: {
    title: `${personalData.name}`,
    description: personalData.description,
    siteName: `${personalData.name}`,
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${personalData.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Toaster position="top-right" />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
