import Link from "next/link";
import { BLOG_POSTS } from "../utils/data";

export default function Blog() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
        Blogs
      </h2>

      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.slug}
            className="group relative flex gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  {post.name}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-neutral-500 transition-colors group-hover:text-black dark:text-neutral-400 dark:group-hover:text-neutral-100"
                >
                  Read more →
                </Link>
              </div>

              <span className="text-sm text-neutral-500 line-clamp-2 italic dark:text-neutral-400">
                {post.description}
              </span>

              <span className="mt-1 text-right text-xs text-neutral-400 dark:text-neutral-500">
                {post.date_posted}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
