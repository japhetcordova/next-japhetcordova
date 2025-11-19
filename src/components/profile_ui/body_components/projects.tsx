"use client";
import { Card, CardTitle, CardContent, CardHeader, CardAction } from "../../../components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Array of project data
const projects = [
  {
    name: "Department of Computing Education",
    description: "A smart system to keep track of CSIT students’ attendance at UMTC.",
    url: "umtcodes.me",
    link: "https://www.umtcodes.me"
  },
  {
    name: "Running Shius Agency",
    description: "An agency that navigates Medicare, Health, Marketplace, and Life Insurance.​",
    url: "runningshiusagency.com",
    link: "https://www.runningshiusagency.com"
  },
  {
    name: "Devo Me",
    description: "A community platform where you can share your devotionals with other believers of Christ.",
    url: "devome.vercel.app",
    link: "https://devome.vercel.app"
  },
  {
    name: "Ally Health",
    description: "A virtual care platform connecting teams to health experts and savings.",
    url: "allyhealth.net",
    link: "https://www.allyhealth.net"
  },
];

// Reusable Project Card
const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div
    className="border rounded-lg w-full p-2 hover:bg-foreground hover:text-background hover:-translate-y-2 cursor-pointer duration-200"
    role="button"
    tabIndex={0}
    aria-label={`Visit ${project.name}`}
    onKeyDown={(e) => e.key === "Enter" && window.open(project.link, "_blank", "noopener,noreferrer")}
    onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
  >
    <h1 className="text-md font-bold">{project.name}</h1>
    <p className="text-xs mb-2">{project.description}</p>
    <div className="w-full flex justify-end">
      <Badge className="bg-background font-mono text-foreground">{project.url}</Badge>
    </div>
  </div>
);

// Main Projects Component
export const Projects = () => {
  const action = true;
  const link = "/profile";

  return (
    <Card className="py-4 h-full">
      <CardHeader>
        <CardTitle className="m-0">
          <div className="flex items-center text-xl">
            <Mail className="h-4 w-4 mr-2 flex items-end text-muted-foreground" /> Recent Projects
          </div>
        </CardTitle>

        {action && (
          <Link href={link}>
            <CardAction className="text-xs">
              <div className="flex">
                <p>See more</p>
                <ChevronRight className="h-4.5 w-4.5" />
              </div>
            </CardAction>
          </Link>
        )}
      </CardHeader>

      <CardContent className="mt-0 pl-3.5">
        <div className="flex flex-col gap-2 flex-wrap">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
