import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    //if u later add image change this value :  md:min-h-[30vh]
    <div className="flex flex-col gap-6 py-4  min-h-[80vh] md:min-h-[30vh] ">
      <div>
        <h1 className="text-4xl font-extrabold flex gap-2 items-center">
          {"Hi! I am Abdul Rafay"}
          <span className="text-2xl font-normal italic text-gray-500">
            — Software Engineer
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="">
          {/* Always wanted a little corner on the internet to share what I'm
          learning or rant about whatever I'm building. */}
          Welcome! This is my small corner on the internet where I'm going to
          post or rant about technologies and stuff i am working on.
        </p>

        <p>
          I build production-grade apps with React, Next, Node, Spring Boot &
          PostgreSQL. Strong focus on stuff that scales and doesn't wake me up
          at 3am. hehe.
        </p>

        <p>When I am not coding, I'm either playing chess or reading books!</p>

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
