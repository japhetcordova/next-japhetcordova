"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export const About = () =>{
    const action = false;
    const link = "/profile";
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
                <Card className="py-4 h-full">
                    <CardHeader>
                        <CardTitle className="m-0">
                            <div className="flex items-center text-xl">
                                <BriefcaseBusiness className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> About
                            </div>
                            
                        </CardTitle>
                        { action &&(
                            <Link href={link}>
                                <CardAction className="text-xs ">
                                    <div className="flex">
                                        <p>See more</p><ChevronRight className="h-4.5 w-4.5"/>
                                    </div>
                                </CardAction>
                            </Link>
                        )}
                        
                    </CardHeader>
                    <CardContent className="mt-0 pl-3.5 text-sm">
                        <p>
                            I am a full-stack developer and software engineer with two years of hands-on experience designing and building software solutions, debugging complex issues, developing SaaS platforms, creating professional portfolios, and engineering comprehensive Human Resource Management Systems (HRMS).
                        </p>
                        <br />
                        <p>
                            My strengths lie in programming with modern technologies, paired with fast learning, creativity, leadership, and product-level thinking. I’m passionate about teaching, simplifying complexity, and building organized solutions that make a real impact.                    
                        </p>
                        <br />
                        <p>
                            I value emphasis, efficiency, high quality, strong foundational systems, security, data privacy, and cutting-edge product excellence.
                        </p>
                        <br />
                        <p>
                            Currently, I am taking a major leap into AI development—focusing on building intelligent automations and data-driven solutions that simplify workflows, enhance decision-making, and empower business leaders to make well-informed, strategic choices with confidence.
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}