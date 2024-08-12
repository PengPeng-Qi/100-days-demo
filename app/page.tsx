import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-56 mt-32">
      <div className="font-semibold">A Next.js With TailwindCss Starter Template</div>

      <div className="text mt-12">
        <div>
          <Link href="demo/logo">Logo 动画</Link>
        </div>
        <div>
          <Link href="demo/dark">dark mode switch</Link>
        </div>
        <div>
          <Link href="demo/background">背景动画</Link>
        </div>
      </div>
    </div>
  );
}
