"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Mode({ theme = "system" }: { theme?: "dark" | "light" | "system" }) {
  const themeConfig = useTheme();

  useEffect(() => {
    // 可控制项目的 mode，默认跟随系统
    themeConfig.setTheme(theme);
  });

  return <></>;
}
