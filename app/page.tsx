import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-4 mt-16 sm:mx-28 sm:mt-32 lg:mx-56">
      <div className="text-xl font-semibold">A Next.js With TailwindCss Starter Template</div>

      <div className="text mt-12">
        <Button variant="link" className="pl-0">
          <Link href="/demo/logo">Logo 动画</Link>
        </Button>
        <Button variant="link">
          <Link href="/demo/dark">dark mode switch</Link>
        </Button>
        <Button variant="link">
          <Link href="/demo/background">背景动画</Link>
        </Button>
        <Button variant="link">
          <Link href="/demo/count-down">拉绳倒计时</Link>
        </Button>
        <Button variant="link">
          <Link href="/demo/card">rgb 卡片</Link>
        </Button>
      </div>
    </div>
  );
}
