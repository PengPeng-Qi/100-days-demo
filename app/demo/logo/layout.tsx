import { Metadata } from "next";

export const metadata: Metadata = {
  title: "100 days demo - logo",
  description: "100 days demo",
  keywords: ["demos", "css demos", "logo", "svg"],
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex justify-center">{children}</div>;
}
