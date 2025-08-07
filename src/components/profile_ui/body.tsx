"use client";
import { Blog } from "./body_components/blog";
import { About } from "./body_components/about";
import { Stack } from "./body_components/stack";
import { BeyondCoding } from "./body_components/beyond_coding";
import { Projects } from "./body_components/projects";
import { Certifications } from "./body_components/certifications";
import { Recommendation } from "./body_components/recommendations";
import { Connect } from "./body_components/connect";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Timeline } from "./body_components/timeline";
export const Body = () =>{
    const pathname = usePathname();
    return(
        <AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-1 h-full flex flex-col"
            >
                
                <div className="flex flex-col gap-y-2 w-full mt-4">
                    <div>
                        <About/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">                      
                        <div className="flex-[1]">
                            <Timeline/>
                        </div> 
                        <div className="flex flex-col flex-[2] gap-2">
                            <div className="flex-[1/2]">
                                <Stack/>
                            </div>
                            <div className="flex-[1/2]">
                                <Certifications/>
                            </div>
                        </div>               
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">                      
                        <div className="flex-[4]">
                            <Projects/>
                        </div> 
                        <div className="flex flex-col flex-[2] gap-2">
                            <div className="flex-[1]">
                                <BeyondCoding/>
                            </div>
                            <div className="flex-[1]">
                                <Recommendation/>
                            </div>
                        </div>               
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full">                      
                        <div className="flex flex-col flex-[1]">
                        <Connect/>
                        </div>
                        <div className="flex-[2]">
                            <Blog/>
                        </div>                
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}