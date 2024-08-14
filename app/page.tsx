import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-4 mt-16 cursor-pointer sm:mx-28 sm:mt-32 lg:mx-56">
      <div className="text-xl font-semibold">100 Days Demo</div>

      <div className="text mt-9">
        <Button variant="link" className="pl-0">
          <Link href="/logo">Logo 动画</Link>
        </Button>
        <Button variant="link" className="pl-0">
          <Link href="/mobile-menu">移动端菜单</Link>
        </Button>
        {/* <Button variant="link">
          <Link href="/dark">dark mode switch</Link>
        </Button>
        <Button variant="link">
          <Link href="/background">背景动画</Link>
        </Button>
        <Button variant="link">
          <Link href="/count-down">拉绳倒计时</Link>
        </Button>
        <Button variant="link">
          <Link href="/card">rgb 卡片</Link>
        </Button> */}
      </div>
    </div>
  );
}
