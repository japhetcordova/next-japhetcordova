
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Tag {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

// Removed unused interface 'Post'

const POSTS_QUERY = `*[_type == "post"] {
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

const options = { next: { revalidate: 30 } };

const link = "/";

export default async function IndexPage() {

  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-2 lg:p-8">
      <Link href={link}>
        <span className="flex items-center group text-sm mb-8 hover:font-bold duration-100"><ArrowLeft className="h-4.5 w-4.5 group-hover:-translate-x-3 duration-200"/>Back to home</span>
      </Link>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      {posts && posts.length > 0 ? (
        <ul className="flex flex-col gap-y-6">
          {posts.map((post) => {
            const postImageUrl = post.image
              ? urlFor(post.image)?.width(400).height(220).quality(90).url()
              : null;
            return (
              <Card key={post._id} className="border rounded-lg p-2 group hover:shadow-lg hover:translate-y-2  duration-500">
                <Link href={`/blog/${post.slug.current}`} className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
                  {postImageUrl && (
                    <img
                      src={postImageUrl}
                      alt={post.title}
                      className="w-full md:w-[220px] h-[140px] md:h-[120px] aspect-video rounded-xl object-cover object-center mb-2 md:mb-0"
                      width="400"
                      height="220"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg md:text-2xl font-semibold duration-500">
                      {post.title}
                    </h2>
                    <p className="text-accent text-xs mb-2 md:mb-0">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 ">
                        {post.tags.map((tag: Tag) => (
                          <Badge
                            key={tag._id}
                            variant="outline"
                            className="text-xs sm:text-sm mt-2 md:mt-4"
                          >
                            {tag.title}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </Card>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500">No posts found.</p>
      )}
    </main>
  );
}