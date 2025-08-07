import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
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

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

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

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(400).quality(90).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-2 lg:p-8 flex flex-col">
      <Link href={link}>
        <span className="flex items-center group text-sm mb-8 hover:font-bold duration-100">
          <ArrowLeft className="h-4.5 w-4.5 group-hover:-translate-x-3 duration-200"/>
          Back to blog
        </span>
      </Link>
      
      {postImageUrl && (
        <div className="w-full flex justify-center">
          <img
            src={postImageUrl}
            alt={post.title}
            className="w-full max-w-3xl h-[180px] sm:h-[260px] md:h-[340px] object-cover object-center rounded-t-xl shadow-md"
            style={{ aspectRatio: '16/5' }}
            width="1200"
            height="400"
            loading="eager"
          />
        </div>
      )}
      
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
      
      <Card className="prose p-4 border text-sm">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </Card>
      <Footer/>
    </main>
  );
}