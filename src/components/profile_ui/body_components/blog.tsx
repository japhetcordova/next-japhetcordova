import { Card, CardTitle, CardContent, CardHeader, CardAction, CardDescription} from "../../../components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Tag {
    _id: string;
    title: string;
    slug: { current: string };
    description?: string;
}

export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    image?: unknown;
    tags: Tag[];
    body: unknown[];
}

export function Blog() {
    const action = true;
    const link = "/blog";
    return (
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        Recent Blogs
                    </div>
                </CardTitle>
                {action && (
                    <Link href={link}>
                        <CardAction className="text-xs ">
                            <div className="flex group">
                                <p>See more</p>
                                <ChevronRight className="h-4.5 w-4.5 group-hover:translate-x-2 duration-200" />
                            </div>
                        </CardAction>
                    </Link>
                )}
            </CardHeader>
            <Link href={"blog/"}>
                <CardContent className="mt-0 pl-3.5 flex flex-col gap-2">
                            <Card className="py-2 group duration-500 hover:translate-y-2 cursor-pointer">
                                <CardHeader className="px-4">
                                    <CardTitle>title</CardTitle>
                                    <CardDescription>
                                        <p>description</p>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-4">
                                    <div className="flex gap-2 flex-wrap">
                                        <Badge variant="outline">tag</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                    </CardContent>
                </Link>
        </Card>
    );
}