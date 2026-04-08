import Image from "next/image";
import Link from "next/link";

import x from "@/public/x.svg";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <div className="bg-white flex items-baseline justify-between">
      <div className="">
        <Image src={x} alt="logo" className="h-12 w-12 rounded-2xl" />
      </div>

      <div className="flex items-center gap-4 text-xl text-gray-600">
        <Link href={"/work"}>Work</Link>
        <Link href={"/projects"}>Project</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/thoughs"}>Thoughs</Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
