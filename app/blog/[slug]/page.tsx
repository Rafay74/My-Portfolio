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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.name}</h1>
      <p className="mt-4 text-gray-600">{post.description}</p>
    </div>
  );
}
