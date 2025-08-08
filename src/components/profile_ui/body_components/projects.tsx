"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export const Projects = () =>{
    const action = true;
    const link = "/profile";
    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <Mail className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Recent Projects
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
            <CardContent className="mt-0 pl-3.5">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-wrap">
                        <div className="border rounded-lg w-full p-2 hover:bg-foreground hover:text-background hover:-translate-y-2 duration-200 cursor-pointer"
                            role="button"
                            tabIndex={0}
                            aria-label="Visit Ally Health"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.runningshiusagency.com', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://www.runningshiusagency.com', '_blank', 'noopener,noreferrer')}
                        >
                            <h1 className="text-md font-bold">
                                Running Shius Agency
                            </h1>
                            <p className="text-xs mb-2">
                                An agency that navigates Medicare, Health, Marketplace, and Life Insurance.​
                            </p>
                            <div className="w-full flex justify-end">
                                <Badge className="bg-background font-mono text-foreground">
                                    runningshiusagency.com
                                </Badge>        
                            </div>
                        
                        </div>
                        <div className="border rounded-lg w-full p-2 hover:bg-foreground hover:text-background hover:-translate-y-2 cursor-pointer duration-200"
                            role="button"
                            tabIndex={0}
                            aria-label="Visit Avocado VA"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.avocadova.com', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://www.avocadova.com', '_blank', 'noopener,noreferrer')}
                        >
                            <h1 className="text-md font-bold">
                                Avocado VA
                            </h1>
                            <p className="text-xs">
                                A communication + sales CRM agency designed to simplify and boost productivity.
                            </p>
                            <div className="w-full flex justify-end">
                                <Badge className="bg-background font-mono text-foreground">
                                    avocadova.com
                                </Badge> 
                            </div>
 
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <div className="border rounded-lg w-full p-2 hover:bg-foreground hover:text-background hover:-translate-y-2 cursor-pointer duration-200"
                            role="button"
                            tabIndex={0}
                            aria-label="Visit Ally Health"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.allyhealth.net', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://www.allyhealth.net', '_blank', 'noopener,noreferrer')}>
                            <h1 className="text-md font-bold">
                                Ally Health
                            </h1>
                            <p className="text-xs mb-2">
                                A virtual care platform connecting teams to health experts and savings.
                            </p>
                            <div className="w-full flex justify-end">
                                <Badge className="bg-background font-mono text-foreground">
                                    allyhealth.net
                                </Badge>
                            </div>
                            
                        </div>
                        <div className="border rounded-lg w-full p-2 hover:bg-foreground hover:text-background hover:-translate-y-2 cursor-pointer duration-200"
                            role="button"
                            tabIndex={0}
                            aria-label="Visit TMT Insurance"
                            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.tmtinsurance.com', '_blank', 'noopener,noreferrer')}
                            onClick={() => window.open('https://www.tmtinsurance.com', '_blank', 'noopener,noreferrer')}
                        >
                            <h1 className="text-md font-bold">
                                TMT Insurance
                            </h1>
                            <p className="text-xs mb-2">
                                Insurance company that compares insurance policies from a wide range of carriers.
                            </p>
                            <div className="w-full flex justify-end">
                                <Badge className="bg-background font-mono text-foreground">
                                    tmtinsurance.com
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}