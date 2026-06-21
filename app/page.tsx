import Blog from "./components/blog";
import Experience from "./components/experience";
import GithubHeatmap from "./components/github";
import Hero from "./components/hero";

import Personal from "./components/personal";
import Techstack from "./components/techstack";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 sm:gap-8">
      <Hero />
      <Techstack />
      <GithubHeatmap />
      <section id="work">
        <Experience />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <Personal />
    </div>
  );
}
