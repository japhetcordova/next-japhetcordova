import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode_toggle"
import { Headset } from "lucide-react"
import { Send } from "lucide-react"
import { Trophy } from "lucide-react"
import { MapPin } from "lucide-react"
export const HeaderView = () =>{
    return(
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-8 bg-transparent rounded-2xl items-start">
          {/* Profile Image */}
          <div className="flex justify-center w-full md:justify-start md:w-fit">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                src="/Japhet_Cartoon.jpg"
                alt="Profile Image"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                loading="eager"
                className="object-cover"
                />
            </div>
           </div>

          {/* Profile Content */}
          <div className="flex-1 w-full flex flex-col gap-2">
            {/* Name, Location, Toggle */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Japhet Cordova</h1>
                <div className="flex flex-row items-center"><MapPin className="h-4 w-4"/>
                  <p className="text-muted-foreground  text-sm sm:text-base"> Tagum City, Philippines</p>
                </div>
                
              </div>
              <div className="text-xs text-muted-foreground"><ModeToggle/></div>
            </div>

            {/* Position */}
            <p className="text-md font-semibold text-muted-foreground">Full-stack Developer | Branding Specialist</p>

            {/* Buttons (including Champion Button) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:mt-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="hover:-translate-y-2 duration-400 cursor-pointer"onClick={() => window.open("https://calendly.com/japhetcordova9/schedule-a-call?month=2025-08", "_blank")}><Headset/> Schedule a Call</Button>
                <Button size="sm" className="hover:-translate-y-2 duration-400 cursor-pointer" variant="outline" onClick={() => window.location.href = "mailto:japhetcordova9@gmail.com"}><Send/>Send Email</Button>
              </div>
              <Button className="champion-btn lg:w-md w-full" aria-label="Champion">
                <Trophy className="w-5 h-5" />
                UMTC 2025 HACKATHON CHAMPION
              </Button>

            </div>
          </div>
        </div>
    )
}