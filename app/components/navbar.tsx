"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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
    <header className="sticky top-0 z-50 -mx-4 border-b border-neutral-200/50 bg-white/75 px-4 backdrop-blur-md sm:-mx-6 sm:px-6">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 py-2.5 sm:gap-4 sm:py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={me}
            alt="Abdul Rafay"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200 sm:h-11 sm:w-11 md:h-14 md:w-14"
          />
        </Link>

        <div className="flex items-center justify-center gap-2.5 text-sm text-gray-700 sm:gap-4 sm:text-base">
          <SectionLink href="/#work">Work</SectionLink>
          <SectionLink href="/#blog">Blog</SectionLink>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1 transition hover:text-neutral-700"
          >
            Resume
            <HiOutlineArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div
          className="h-9 w-9 shrink-0 sm:h-11 sm:w-11 md:h-14 md:w-14"
          aria-hidden
        />
      </div>
    </header>
  );
}
