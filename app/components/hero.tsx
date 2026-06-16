import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    //if u later add image change this value :  md:min-h-[30vh]
    <div className="flex flex-col gap-6 py-4  min-h-[80vh] md:min-h-[30vh] ">
      <h1 className="text-4xl font-bold">{"Hi! I am Abdul Rafay"}</h1>
      <span className="text-lg font-semibold text-gray-500">Engineer</span>

      <div className="flex flex-col gap-4">
        <p className="">
          Always wanted a little corner on the internet to share what I'm
          learning or rant about whatever I'm building.
        </p>

        <p>
          I build production-grade apps with React, Next, Node, Spring Boot &
          PostgreSQL. Strong focus on stuff that scales and doesn't wake me up
          at 3am. hehe.
        </p>

        <div className="flex gap-4 text-gray-500 text-xl [&>*]:hover:text-black transition">
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
