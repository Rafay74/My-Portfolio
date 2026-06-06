import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    //if u later add image change this value :  md:min-h-[30vh]
    <div className="flex flex-col gap-6 py-4  min-h-[80vh] md:min-h-[30vh] ">
      <div className="flex items-center gap-4">
        <div className="">
          <h1 className="text-4xl font-bold">{"Abdul Rafay"}</h1>
          <span className="text-lg font-semibold text-gray-500">
            FullStack Engineer · Learner{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="">
          I build production grade application using React , Next , Node ,
          Springboot and PostgreSQL. With a strong focus on writing scalable and
          secure code When i am not coding, im either playing chess or reading
          books.
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
