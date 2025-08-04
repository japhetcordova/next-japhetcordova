"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
    
export const Certifications = () =>{
    const action = true;
    const link = "/profile";
    const Certificates = [
        {certificate: "Coming soon", company: "free code camp"},
        {certificate: "Coming soon", company: "Deeplearning.AI"},
        {certificate: "Coming soon", company: "University of Helsinki"},
        {certificate: "Coming soon", company: "Google"},
    ]
    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <BadgeCheck className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Recent Certifications
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
            <CardContent className="mt-0 pl-3.5 grid grid-cols-2 grid-rows-2 gap-2">
                {Certificates.slice(0, 4).map((cert, idx) => (
                    <div
                    key={idx}
                    className="bg-background2 rounded-md p-2 hover:bg-accent transition-colors duration-150"
                    >
                    <h1 className="text-sm font-semibold mb-0.5">{cert.certificate}</h1>
                    <p className="text-xs text-muted-foreground">{cert.company}</p>
                    </div>
                ))}
            </CardContent>

        </Card>
    )
}