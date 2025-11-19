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
                            I am a Full-Stack Software Engineer and AI/Automation Developer with a two-year track record of delivering scalable solutions that maximize efficiency and accelerate business growth. I engineer and launch SaaS platforms and comprehensive HRMS systems that result in streamlined operations and measurable cost reduction.
                        </p>
                        <br />
                        <p>
                            Beyond engineering, I ensure rapid market readiness. I establish secure, professional digital footprints (Webflow/WordPress, domain setup, branded email) that enable the swift and successful launch of professional digital marketing agencies, critical for seamless onboarding onto major native ad platforms (Taboola, Outbrain, MGID).
                        </p>
                        <br />
                        <p>
                            My current focus is on building intelligent, data-driven automations designed to simplify complex workflows, enhance data accuracy, and empower business leaders to make well-informed, strategic decisions with confidence and less worry.
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}