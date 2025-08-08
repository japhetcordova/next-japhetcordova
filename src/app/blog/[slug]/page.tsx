import { PortableText } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/profile_ui/footer";
import { Card } from "@/components/ui/card";

interface Tag {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

// Removed unused interface 'Post'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  image,
  tags[]-> {
    _id,
    title,
    slug,
    description
  },
  body
}`;

const link = "/blog";

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch(POST_QUERY, resolvedParams, options);
  
  // Handle case where post is not found
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-2 lg:p-8 flex flex-col">
      <Link href={link}>
        <span className="flex items-center group text-sm mb-8 hover:font-bold duration-100">
          <ArrowLeft className="h-4.5 w-4.5 group-hover:-translate-x-3 duration-200"/>
          Back to blog
        </span>
      </Link>
      
      <p className="mt-4 md:mt-8 text-gray-600">
        {new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
      
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: Tag) => (
            <Badge
              key={tag._id}
              variant="outline"
              className="text-sm"
            >
              {tag.title}
            </Badge>
          ))}
        </div>
      )}
      
      <Card className="prose p-4 md:p-8 border text-base md:text-xl mt-4">
        <hr />
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </Card>
      <Footer/>
    </main>
  );
}