"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export const BeyondCoding = () =>{
    const action = false;
    const link = "/profile";
    return(
        <Card className="py-4 h-full flex-1">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <BookOpen className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Beyond Coding
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
                    When not coding, I explore business startups, leadership, the mindset of successful entrepreneurs, and minimalism. 
                </p>
                <br />
                <p>
                    I enjoy helping others through tutorials, mentoring, and eventually plan to launch my own course.
                </p>
            </CardContent>
        </Card>
    )
}