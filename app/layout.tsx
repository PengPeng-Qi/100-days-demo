import DarkMode from "@/components/DarkMode";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Tailwind Starter",
  description: "A Next.js Tailwind Starter Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
        <ThemeProvider>
          {children}

          <DarkMode />
        </ThemeProvider>
      </body>
    </html>
  );
}
