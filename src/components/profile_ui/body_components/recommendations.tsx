"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { ChartBar } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export const Recommendation = () =>{
    const Recommends = [
        {name: "Prof. Maria Santos", role: "Professor – BSIT Department, University of Mindanao", message: "Japhet has been one of the most committed students I’ve had the pleasure of teaching in the IT program. He’s always been curious, hands-on, and consistently goes beyond what is required of him in class. In one of our major projects, he led his group in building a functional prototype that connected frontend design to backend logic with impressive accuracy. His ability to both lead and collaborate made a lasting impression on me and the department. He’s not just a student with potential—he’s someone who genuinely wants to use his skills to help others and grow in the process."},
        {name: "Engr. Alex Ramos", role: "OJT Supervisor, DavaoTech Solutions", message: "During Japhet’s internship at our company, I witnessed a young professional with a sharp eye for detail and an eagerness to learn. He took initiative in tasks that weren’t even assigned to him, helping streamline some of our internal processes by creating scripts to automate repetitive steps. He asked the right questions, sought feedback, and applied it immediately—qualities I rarely see in interns. Beyond his technical competence, Japhet was respectful, punctual, and highly dependable. I’d gladly recommend him to any company looking for someone who blends technical skill with humility and drive."},
        {name: "Pastor Reuel Villanueva", role: "Church Leader – Pioneering Ministry, Tagum", message: "I’ve known Japhet not only as a volunteer but as someone who genuinely cares about people. He consistently offered his skills to help our ministry even during busy seasons. From setting up our online broadcasts to editing videos and managing presentations, he made everything look easy—and he never sought recognition for it. He’s always the kind of person who sees a need and fills it. His dedication to both his faith and his craft is a rare blend. I’ve seen him grow both spiritually and professionally, and I believe any team would be blessed to have him on board."},
        {name: "Rhea Malicdem", role: "Owner – Rhea’s Prints & Crafts", message: "Japhet helped me build a website for my small printing business, and I couldn’t have asked for a better experience. He patiently listened to what I envisioned and then translated it into something even better than I imagined. What impressed me most was his patience—he explained technical terms in a way I could understand and made sure I felt part of the process. He also followed up after the launch to make sure everything was running smoothly. It’s rare to meet someone who’s not just skilled but also kind and professional. I’m so thankful I got to work with him."},
        {name: "Miguel Ferrer", role: "Group Leader – Capstone Project, UM Tagum", message: "Working with Japhet on our Capstone project was one of the best parts of my academic journey. He wasn’t just technically gifted—he was our glue. He kept everyone motivated, stepped in when things got tough, and always found creative solutions when we were stuck. I still remember the long nights we spent debugging code, and Japhet would be the one saying, ‘Okay, let's breathe. Let’s try again.’ That kind of calm leadership is rare in someone our age. If I ever build a startup, he’s one of the first people I’d call."},
        {name: "Hon. Elena Dela Cruz", role: "Barangay Captain – Mainit, Maco", message: "Japhet has been a constant presence in our community, especially when it comes to helping the youth and supporting tech-driven initiatives. He volunteered to digitize our Sangguniang Kabataan records and helped set up a simple system that made it easier to manage event attendance and planning. He also facilitated a free tech orientation for young people in our barangay, many of whom had never touched a computer before. He did all of this quietly, without asking for anything in return. It’s not every day that we come across a young man who uses his skills to serve others so selflessly."}
    ]
    
    const action = false;
    const link = "/profile";

    const plugin = React.useRef(
        Autoplay({ delay: 10000, stopOnInteraction: false })
    )
    return(
        <Card className="py-4 h-full w-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <ChartBar className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Recommendations
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
            <CardContent className="mt-0 pl-3.5 flex items-center">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-xs"
                    orientation="horizontal"
                    >
                    <CarouselContent>
                        {Recommends.map((rec, idx) => (
                        <CarouselItem key={idx} onClick={(e) => e.preventDefault()}>
                            <div className="relative font-serif mt-4 w-full text-sm text-foreground flex">
                                <span className="mr-1">“</span>
                                    <p className="line-clamp-3 overflow-hidden text-ellipsis">{rec.message}</p>
                                <span className="absolute bottom-0 right-0">”</span>
                            </div>                            
                            <hr className="my-2 mt-4" />
                            <h4 className="font-semibold text-sm">{rec.name}</h4>
                            <p className="text-xs text-muted-foreground mb-8">{rec.role}</p>
                        </CarouselItem>

                        ))}
                    </CarouselContent>
                    </Carousel>
            </CardContent>
        </Card>
    )
}