import Link from "next/link";
import { PERSONAL } from "../utils/data";

export default function Personal() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold sm:text-2xl">Personal</h2>

      <div className="flex flex-col gap-3">
        {PERSONAL.map((item) => (
          <Link
            key={item.slug}
            href={item.slug}
            className="group flex flex-col gap-1 rounded-xl border border-neutral-200 p-3 transition hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <span className="text-base font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-200">
              {item.name}
            </span>

            <span className="text-sm text-neutral-500 italic dark:text-neutral-400">
              {item.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
