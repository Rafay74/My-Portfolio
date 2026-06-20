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
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold tracking-tight">{post.name}</h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {post.date_posted}
          </p>
          <BlogShare title={post.name} slug={post.slug} />
        </div>
        <hr className="border-neutral-200 dark:border-neutral-800" />
      </header>

      {post.content ? (
        <MarkdownContent content={post.content} />
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">
          Coming soon.
        </p>
      )}
    </div>
  );
}
