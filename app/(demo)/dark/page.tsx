"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const svgVariants = {
  hidden: () => {
    return {
      rotate: "-90deg",
      scale: 1.2,
      transition: { type: "spring", damping: 12 },
    };
  },
  visible: () => {
    return {
      rotate: "90deg",
      scale: 1,
      transition: { type: "spring", damping: 18 },
    };
  },
};
const circleVariants = {
  hidden: (index: number) => {
    const angle = (index * Math.PI * 2) / 6; // 计算每个圆点的角度
    const x = -Math.cos(angle) * 8; // 大圆的中心点
    const y = -Math.sin(angle) * 8; // 大圆的中心点
    return {
      opacity: 0,
      x: x,
      y: y,
      transition: { duration: 0.1 },
    };
  },
  visible: (index: number) => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.35, delay: 0.15 + index * 0.1, type: "spring", damping: 25, stiffness: 200 },
    };
  },
};

const circles = [
  { cx: 16.5, cy: 9 },
  { cx: 13, cy: 15.928203 },
  { cx: 5, cy: 15.928203 },
  { cx: 1.5, cy: 9 },
  { cx: 5, cy: 2.071797 },
  { cx: 13, cy: 2.071797 },
];

export default function MoonSVG() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animateState, setAnimateState] = useState("visible");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!resolvedTheme || !theme) return;

    console.log(theme, resolvedTheme);
    if (theme === "system") {
      if (resolvedTheme === "dark") {
        setAnimateState("hidden");
      } else {
        setAnimateState("visible");
      }
    } else {
      if (theme === "dark") {
        setAnimateState("hidden");
      } else {
        setAnimateState("visible");
      }
    }
  }, [animateState, resolvedTheme, setTheme, theme]);

  if (!mounted) return;

  return (
    <div className="mt-32 flex h-96 w-1/2 cursor-pointer justify-center">
      {mounted && (
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          variants={svgVariants}
          initial="hidden"
          animate={animateState}
          fill={resolvedTheme === "dark" ? "hsl(0 0% 63.9%)" : "hsl(0 0% 32.2%)"}
          whileHover={{
            fill: resolvedTheme === "dark" ? "hsl(0 0% 98%)" : "hsl(0 0% 3.9%)",
          }}
          onClick={() => {
            console.log(animateState, "animateState");
            if (animateState === "hidden") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          <motion.circle cx="9" cy="9" r="5" />
          <motion.circle cx="12" cy="12" r="5" fill={resolvedTheme === "dark" ? "hsl(0 0% 3.9%)" : "transparent"} />

          {circles.map((circle, index) => (
            <motion.circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r="1.5"
              variants={circleVariants}
              custom={index}
              initial="hidden"
              animate={animateState}
            />
          ))}
        </motion.svg>
      )}
    </div>
  );
}
