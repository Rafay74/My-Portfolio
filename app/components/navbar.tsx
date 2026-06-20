"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { ThemeToggle } from "./theme-toggle";

import me from "@/public/abdul_rafay_pic.jpeg";

function SectionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || "/";
    const id = href.slice(hashIndex + 1);

    if (pathname !== path) return;

    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-neutral-200/50 bg-white/75 px-4 backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/75">
      <div className="grid grid-cols-3 items-center py-3">
        <Link href="/" className="justify-self-start">
          <Image
            src={me}
            alt="Abdul Rafay"
            className="h-14 w-14 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
          />
        </Link>

        <div className="flex items-center justify-center gap-4 text-md text-gray-700">
          <SectionLink href="/#work">Work</SectionLink>
          <SectionLink href="/#blog">Blog</SectionLink>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1 transition hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            Resume
            <HiOutlineArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
