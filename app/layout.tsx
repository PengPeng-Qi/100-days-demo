import DarkMode from "@/components/DarkMode";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 days demo",
  description: "100 days demo",
  keywords: ["demos", "css demos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gary-100 dark:bg-gary-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          {children}
          <DarkMode />
        </ThemeProvider>
      </body>
    </html>
  );
}
