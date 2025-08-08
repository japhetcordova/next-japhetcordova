"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardContent, CardHeader, } from "../../../components/ui/card";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  { role: "Vice President", company: "UMTC CODES", year: "2025" },
  { role: "Programming Champion", company: "CSIT Fest", year: "2025" },
  { role: "Frontend Developer", company: "TMT Insurance", year: "2025" },
  { role: "Hackathon Champion", company: "CSIT", year: "2025" },
  { role: "Java Mentor", company: "Batch 2024", year: "2024" },
  { role: "BS Information Technology", company: "University of Mindanao", year: "2024" },
  { role: "Hello World! 👋🏻", company: "Wrote my first line of code", year: "2023" },
];
export const Timeline = () =>{
    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <BriefcaseBusiness className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Experience
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="mt-0 pl-3.5">
                <div className="relative border-l-1 border-ring pl-3.5">
                    {experiences.map((exp, idx) => (
                    <div key={idx} className="relative mb-2 group">
                        <div className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-background border-2 border-ring -mx-0 group-hover:bg-primary duration-150" />
                            <div>
                                <p className="font-semibold text-sm">{exp.role}</p>
                                <div className="flex justify-between items-center mt-0">
                                    <p className="text-xs text-muted-foreground">{exp.company}</p>
                                    <Badge className="text-[10px] flex justify-between font-mono rounded-4xl h-4 border-foreground px-1 m-2" variant="outline">{exp.year}</Badge>
                                </div>
                            
                            </div>
                        </div>
                    ))}     
                </div>
            </CardContent>
        </Card>
    )
}