import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/app/utils/data";
import BlogShare from "@/app/components/blog-share";
import MarkdownContent from "@/app/components/markdown-content";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 px-0 py-8 sm:gap-6 sm:py-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {post.name}
        </h1>
        <p className="text-base text-neutral-500 sm:text-lg md:text-xl">
          {post.description}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-500">
            {post.date_posted}
          </p>
          <BlogShare title={post.name} slug={post.slug} />
        </div>
        <hr className="border-neutral-200" />
      </header>

      {post.content ? (
        <MarkdownContent content={post.content} />
      ) : (
        <p className="text-neutral-600">
          Coming soon.
        </p>
      )}
    </div>
  );
}
