import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/app/utils/data";

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
    <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4 py-10">
      <h1 className="text-2xl font-medium tracking-tight">{post.name}</h1>

      <p className="mt-4 text-gray-600">{post.description}</p>
    </div>
  );
}
