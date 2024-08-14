"use client";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    /**
     * delayChildren: 子动画开始的延迟时间
     * staggerChildren: 子动画错开的时间
     * staggerDirection: 错开子动画的方向
     */
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
};

export const Navigation = () => {
  const menus = [
    { name: "logo demo", path: "/logo" },
    { name: "menu2", path: "/mobile-menu" },
    { name: "menu3", path: "/mobile-menu" },
    { name: "menu4", path: "/mobile-menu" },
  ];

  return (
    <motion.ul variants={variants}>
      <div className="flex h-96 w-full flex-col justify-center pl-6">
        {menus.map((menu, index) => (
          <MenuItem key={menu.name} menu={menu} index={index} />
        ))}
      </div>
    </motion.ul>
  );
};
