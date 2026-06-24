import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center sm:min-h-[60vh]">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
        404
      </p>
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
        Page not found
      </h1>
      <p className="max-w-md text-neutral-500">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium transition hover:border-neutral-300 hover:bg-neutral-50"
      >
        Back to home
      </Link>
    </div>
  );
}
