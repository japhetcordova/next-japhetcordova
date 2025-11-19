import { Card, CardTitle, CardContent, CardHeader, CardAction, CardDescription } from "../../../components/ui/card";
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
  tags: string[];
  description?: string;
}

// ---------- Blog data from user context ----------
const blogPosts: Post[] = [
  {
    _id: "1",
    title: "The Humility of Starting Out",
    slug: { current: "the-humility-of-starting-out" },
    publishedAt: "August 8, 2025",
    tags: ["Junior Developer", "Programming", "Mindset", "Problem Solving"],
    description: "The Humility of Starting Out",
  },
  {
    _id: "2",
    title: "The Junior Developer I Want to Be",
    slug: { current: "the-junior-developer-i-want-to-be" },
    publishedAt: "August 8, 2025",
    tags: ["Junior Developer", "Senior Developer", "Leadership"],
    description: "The Junior Developer I Want to Be",
  },
  {
    _id: "3",
    title: "Inversion Thinking",
    slug: { current: "inversion-thinking" },
    publishedAt: "August 3, 2025",
    tags: ["Mindset", "Problem Solving", "Perspective"],
    description: "Inversion Thinking",
  },
  {
    _id: "4",
    title: "We All Start Unready",
    slug: { current: "we-all-start-unready" },
    publishedAt: "August 9, 2025",
    tags: ["Mindset", "Junior Developer", "Startup Culture"],
    description: "We All Start Unready",
  },
  {
    _id: "5",
    title: "Clean Code, Clear Structure",
    slug: { current: "clean-code-clear-structure" },
    publishedAt: "August 2, 2025",
    tags: ["React", "Programming"],
    description: "Clean Code, Clear Structure",
  },
  {
    _id: "6",
    title: "Why Factory Functions Are a Game-Changer in Software Development",
    slug: { current: "factory-functions-game-changer" },
    publishedAt: "August 6, 2025",
    tags: ["JavaScript", "Software Development", "Clean Code", "Web Development", "Design Patterns"],
    description: "Why Factory Functions Matter",
  },
  {
    _id: "7",
    title: "Wisdom in Unexpected Places",
    slug: { current: "wisdom-in-unexpected-places" },
    publishedAt: "August 4, 2025",
    tags: ["Mindset", "Perspective", "Problem Solving"],
    description: "Wisdom in Unexpected Places",
  },
];

// ---------- Reusable Blog Item ----------
function BlogItem({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <CardContent className="mt-0 pl-3.5 flex flex-col gap-2">
        <Card className="py-2 group duration-500 hover:translate-y-2 cursor-pointer">
          <CardHeader className="px-4">
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              <p>{post.description}</p>
              <p className="text-[10px] opacity-70 mt-1">{post.publishedAt}</p>
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4">
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Link>
  );
}

// ---------- Main Blog Component ----------
export function Blog() {
  return (
    <Card className="py-4 h-full">
      <CardHeader>
        <CardTitle className="m-0">
          <div className="flex items-center text-xl">Featured Blogs</div>
        </CardTitle>

        <Link href={"/blog"}>
          <CardAction className="text-xs">
            <div className="flex group">
              <p>See more</p>
              <ChevronRight className="h-4.5 w-4.5 group-hover:translate-x-2 duration-200" />
            </div>
          </CardAction>
        </Link>
      </CardHeader>

      {blogPosts.map((post) => (
        <BlogItem key={post._id} post={post} />
      ))}
    </Card>
  );
}
