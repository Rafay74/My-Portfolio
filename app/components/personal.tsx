import Link from "next/link";
import { PERSONAL } from "../utils/data";

export default function Personal() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-extrabold">Personal</h2>

      <div className="flex flex-col gap-4">
        {PERSONAL.map((item) => (
          <Link
            key={item.slug}
            href={item.slug}
            className="group flex justify-between rounded-xl border border-neutral-200 p-4 transition hover:shadow-sm hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {item.name}
              </span>

              <span className="text-sm text-neutral-500 italic">
                {item.description}
              </span>
            </div>
            <span className="text-sm text-neutral-500 transition-colors group-hover:text-black dark:text-neutral-400 dark:group-hover:text-neutral-100">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
