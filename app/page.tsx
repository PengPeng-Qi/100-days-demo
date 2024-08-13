import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-56 mt-32">
      <div className="font-semibold">A Next.js With TailwindCss Starter Template</div>

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
      </div>
    </div>
  );
}
