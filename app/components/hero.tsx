import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col gap-5 py-4 sm:gap-6 md:min-h-[30vh]">
      <div>
        <h1 className="flex flex-col gap-1 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          <span>Hi! I am Abdul Rafay</span>
          <span className="text-lg font-normal italic text-gray-500 sm:text-xl md:text-2xl">
            — Software Engineer
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          Welcome! This is my small corner on the internet where I&apos;m going
          to post or rant about technologies and stuff I am working on.
        </p>

        <p>
          I build production-grade apps with React, Next, Node, Spring Boot &
          PostgreSQL. Strong focus on stuff that scales and doesn&apos;t wake me
          up at 3am. hehe.
        </p>

        <p>
          When I am not coding, I&apos;m either playing chess or reading books!
        </p>

        <div className="flex gap-4 text-xl text-gray-500 transition [&>*]:hover:text-black">
          <a
            href="https://linkedin.com/in/abd-rafay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/rafay74"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
