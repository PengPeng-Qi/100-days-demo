import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mobile menu",
  description: "移动端菜单",
  keywords: ["demos", "css demos", "mobile", "menu"],
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex justify-center">{children}</div>;
}
