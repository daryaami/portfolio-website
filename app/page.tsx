import { About } from "@/sections/About";
import { Articles } from "@/sections/Articles";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      {siteConfig.features.articles ? <Articles /> : null}
      <Contact />
    </>
  );
}
