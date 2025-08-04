"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from "./FrozenRoute"; // path may vary

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const variants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };
  

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
      <motion.div className="absolute inset-0" 
        key={pathname}
        variants={variants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >

          <FrozenRoute>
            {children}
          </FrozenRoute>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
