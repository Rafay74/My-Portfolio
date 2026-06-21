import Image from "next/image";
import aws from "../../public/aws-svgrepo-com.svg";
import docker from "../../public/docker-svgrepo-com.svg";
import firebase from "../../public/firebase-svgrepo-com.svg";
import java from "../../public/java-svgrepo-com.svg";
import javascript from "../../public/javascript-svgrepo-com.svg";
import linux from "../../public/linux-svgrepo-com.svg";
import mongodb from "../../public/mongodb-svgrepo-com.svg";
import nextjs from "../../public/nextjs-fill-svgrepo-com.svg";
import openai from "../../public/openai-svgrepo-com.svg";
import postgresql from "../../public/postgresql-logo-svgrepo-com.svg";
import prisma from "../../public/light-prisma-svgrepo-com.svg";
import reactjs from "../../public/reactjs-svgrepo-com.svg";
import tailwind from "../../public/tailwindcss-icon-svgrepo-com.svg";
import typescript from "../../public/typescript_logo.svg";

const STACK = [
  { src: typescript, alt: "TypeScript" },
  { src: javascript, alt: "JavaScript" },
  { src: reactjs, alt: "React" },
  { src: nextjs, alt: "Next.js" },
  { src: java, alt: "Java" },
  { src: tailwind, alt: "Tailwind" },
  { src: docker, alt: "Docker" },
  { src: aws, alt: "AWS" },
  { src: mongodb, alt: "MongoDB" },
  { src: postgresql, alt: "PostgreSQL" },
  { src: firebase, alt: "Firebase" },
  { src: prisma, alt: "Prisma" },
  { src: openai, alt: "OpenAI" },
  { src: linux, alt: "Linux" },
];

export default function Techstack() {
  return (
    <>
      <h2 className="text-xl font-bold sm:text-2xl">Techstack</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {STACK.map(({ src, alt }, index) => (
          <div
            key={index}
            className="rounded-md border border-gray-200 p-2 cursor-pointer"
          >
            <Image
              src={src}
              alt={alt}
              className="h-8 w-8 object-contain"
              title={alt}
            />
          </div>
        ))}
      </div>
    </>
  );
}
