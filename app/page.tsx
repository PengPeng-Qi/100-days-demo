import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-32 sm:mx-28 lg:mx-56">
      <div className="text-xl font-semibold">A Next.js With TailwindCss Starter Template</div>

      <div className="text mt-12">
        <Button variant="link" className="pl-0">
          <Link href="/demo/logo">Logo 动画</Link>
        </Button>
        <Button variant="link" className="text-neutral-500">
          <Link href="/demo/dark">dark mode switch</Link>
        </Button>
        <Button variant="link" className="text-neutral-500">
          <Link href="/demo/background">背景动画</Link>
        </Button>
      </div>
    </div>
  );
}
