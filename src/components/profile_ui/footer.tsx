"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export const Footer = () =>{
    const pathname = usePathname();
    return(
        <AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <footer className="border-t mt-16 mb-4 border-accent flex justify-between"  role="contentinfo">
                    <p className="text-sm font-semibold p-2">© 2025 Japhet Cordova. All rights reserved.</p>
                    <button className="text-sm p-2 font-semibold hover:cursor-pointer" aria-label="Provide feedback">Feedback</button>
                </footer>
            </motion.div>
        </AnimatePresence>
    )
}