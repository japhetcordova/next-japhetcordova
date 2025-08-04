// \tech-stack\page.tsx

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/profile_ui/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const POSTS_QUERY = `*[_type == "techCategory"] | order(orderRank asc)`;

const options = { next: { revalidate: 30 } };
const link = "/";

export default async function IndexPage() {
  const techs = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8">
      <Link href={link}>
        <span className="flex items-center group text-sm mb-8 hover:font-bold duration-100"><ArrowLeft className="h-4.5 w-4.5 group-hover:-translate-x-3 duration-200"/>Back to home</span>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Tech Stack</h1>
      <ul className="flex flex-col gap-y-8">
        {techs.map((techCategory) => (
          <li key={techCategory._id}>
            <h2 className="text-xl font-semibold">{techCategory.type}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {techCategory.tags?.map((tag: string, index: number) => (
                <Badge variant={"outline"} key={index} className="text-md">{tag}</Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Footer/>
    </main>
  );
}
