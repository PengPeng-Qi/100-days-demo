"use client";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./components/menu-toggle";
import { Navigation } from "./components/navigation";

const sidebar = {
  open: {
    opacity: 1,
    transition: {
      x: 0,
      opacity: { duration: 0.3 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      x: -50,
      opacity: { duration: 0.15 },
    },
  },
};

export default function Page() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="mt-32 h-96 w-64 rounded-xl border-2">
      <div className="absolute h-96 w-64">
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="h-full">
          <motion.div
            className="absolute left-0 top-0 h-full w-full rounded-xl backdrop-blur-sm"
            variants={sidebar}
            onClick={() => toggleOpen(0)}
          ></motion.div>

          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>

      <div className="mt-14 p-6">Text ....</div>
    </div>
  );
}
