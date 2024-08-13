import DarkMode from "@/components/DarkMode";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
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
      <body className={`bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100`}>
        <ThemeProvider attribute="class">
          {children}
          <DarkMode />
        </ThemeProvider>
      </body>
    </html>
  );
}
