import { Button } from "@/components/ui/button";
import { showMenus } from "@/config/menus";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-4 mt-16 cursor-pointer sm:mx-28 sm:mt-32 lg:mx-56">
      <div className="pl-4 text-xl font-semibold">100 Days Demo</div>

      <div className="text mt-9">
        {showMenus.length &&
          showMenus.map(({ href, label }, index) => {
            return (
              <Button variant="link" key={href + index}>
                <Link href={href}>{label}</Link>
              </Button>
            );
          })}
      </div>
    </div>
  );
}
