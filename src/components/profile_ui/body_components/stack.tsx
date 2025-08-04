"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { FlaskConical } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export const Stack = () =>{
    const pathname = usePathname();
    const action = true;
    const link = "/tech-stack";

    const stack = [
        { field: "Frontend", language: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS"] },
        { field: "Backend", language: ["Javascript", "Python", "Java", "Php", "Laravel", "tRPC", "PostgresSQL", "MongoDB"] },
        { field: "DevOps & Cloud", language: ["AWS", "Docker", "GitHub Actions"] },
    ]
    return(
        <AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <Card className="py-4 h-full truncate">
                    <CardHeader>
                        <CardTitle className="m-0">
                            <div className="flex items-center text-xl">
                                <FlaskConical className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Tech Stack
                            </div>
                            
                        </CardTitle>
                        { action &&(
                            <Link href={link}>
                                <CardAction className="text-xs ">
                                    <div className="flex">
                                        <p>View All</p><ChevronRight className="h-4.5 w-4.5"/>
                                    </div>
                                </CardAction>
                            </Link>
                        )}
                        
                    </CardHeader>
                    <CardContent className="mt-0 pl-3.5">
                        {stack.map((stck, idx) =>(
                            <div key={idx}>
                                <p className="text-md font-bold mb-1">
                                    {stck.field}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {stck.language.map((lang, i)=>(
                                        <div key={i}>
                                            <Badge variant="outline">{lang}</Badge>
                                        </div>
                                    ))}
                                </div>
                                <br />
                            </div>
                            
                        ))}
                        

                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}