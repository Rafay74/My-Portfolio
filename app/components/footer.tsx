import Image from "next/image";
import cityImage from "../../public/city.svg";

import VisitorCounter from "./visitor-counter";

export default function Footer() {
  return (
    <footer className="mt-10 overflow-hidden sm:mt-16">
      <div className="relative h-32 w-full ">
        <Image
          src={cityImage}
          alt=""
          fill
          className="object-cover object-bottom opacity-[0.1] "
          aria-hidden
        />
      </div>

      <div className="flex flex-col items-center gap-12 py-6 text-center">
        <div>
          <p className="text-md text-neutral-900 dark:text-neutral-100">
            Made with 🖤 by Abdul Rafay
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
