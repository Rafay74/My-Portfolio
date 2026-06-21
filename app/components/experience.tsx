import { EXPERIENCE } from "../utils/data";
import Image from "next/image";

const STACK_ICONS: Record<string, string> = {
  TypeScript: "/typescript_logo.svg",
  JavaScript: "/javascript-svgrepo-com.svg",
  React: "/reactjs-svgrepo-com.svg",
  "Next.js": "/nextjs-fill-svgrepo-com.svg",
  Java: "/java-svgrepo-com.svg",
  AWS: "/aws-svgrepo-com.svg",
  PostgreSQL: "/postgresql-logo-svgrepo-com.svg",
  MongoDB: "/mongodb-svgrepo-com.svg",
  Docker: "/docker-svgrepo-com.svg",
  Firebase: "/firebase-svgrepo-com.svg",
  Prisma: "/light-prisma-svgrepo-com.svg",
  Tailwind: "/tailwindcss-icon-svgrepo-com.svg",
  Linux: "/linux-svgrepo-com.svg",
  OpenAI: "/openai-svgrepo-com.svg",
};

export default function Experience() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold dark:text-neutral-100 sm:text-2xl">
        Experience
      </h2>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  data?.current
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-neutral-300 dark:bg-neutral-600"
                }`}
              />
              <span className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                {data?.company_name}
              </span>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">{`</>`}</span>
                  <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    {data?.role}
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {data?.type}
                <span className="mx-2 text-neutral-300 dark:text-neutral-600">
                  |
                </span>
                {data?.duration}
              </p>

              {data?.bullets.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {data?.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {data.stack.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {data.stack.map((tech) => {
                    const icon = STACK_ICONS[tech];
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-800"
                      >
                        {icon && (
                          <Image
                            src={icon}
                            alt={tech}
                            width={14}
                            height={14}
                            className="object-contain"
                          />
                        )}
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
