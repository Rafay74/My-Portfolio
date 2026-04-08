import Image from "next/image";
import cityImage from "../../public/city.svg";

export default function Footer() {
  return (
    <footer className="mt-16 overflow-hidden">
      <div className="relative h-32 w-full ">
        <Image
          src={cityImage}
          alt=""
          fill
          className="object-cover object-bottom opacity-[0.1] "
          aria-hidden
        />
      </div>

      <div className="flex flex-col items-center gap-1 py-6 text-center">
        <p className="text-sm text-neutral-900 dark:text-neutral-100">
          Made with 🖤 by Abdul Rafay
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
