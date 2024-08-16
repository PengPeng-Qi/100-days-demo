import { Metadata } from "next";

export const metadata: Metadata = {
  title: "dark mode",
  description: "主题色切换",
  keywords: ["demos", "css demos", "theme", "dark"],
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex justify-center">{children}</div>;
}
