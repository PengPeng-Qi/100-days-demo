"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: () => {
    return {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15 },
    };
  },
  closed: () => {
    return {
      x: -100,
      opacity: 0,
      transition: { type: "spring", duration: 0.35 },
    };
  },
};

export const MenuItem = ({ menu, index }: { menu: { name: string; path: string }; index: number }) => {
  return (
    <motion.li variants={variants} className="relative mb-4 w-2/3 cursor-pointer" custom={index}>
      <Link href={menu.path}>{menu.name}</Link>
    </motion.li>
  );
};
