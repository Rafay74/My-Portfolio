import Link from "next/link";
import { BLOG_POSTS } from "../utils/data";

export default function Blog() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
        Blogs
      </h2>

      <div className="flex flex-col gap-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 rounded-xl border border-neutral-200 bg-white p-3 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-base font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700">
                {post.name}
              </span>

              <span className="text-sm text-neutral-500 line-clamp-2 italic">
                {post.description}
              </span>

              <span className="mt-0.5 text-right text-xs text-neutral-400">
                {post.date_posted}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
