import Image from "next/image";
import Link from "next/link";

import x from "@/public/x.svg";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <div className="">
      {/* <div className="">
        <Image src={x} alt="logo" className="h-12 w-12 rounded-2xl" />
      </div> */}

      <div className="flex items-center justify-between w-full">
        <div className="flex justify-between items-center gap-4 text-md text-gray-400 py-4">
          <Link href={"/work"}>Work</Link>
          <Link href={"/projects"}>Project</Link>
          <Link href={"/blog"}>Blogs</Link>
          <Link href={"/resume"}>Resume</Link>
        </div>
        <div>
          {" "}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
