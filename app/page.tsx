import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import FeaturedProject from "@/components/sections/featured-project";
import Projects from "@/components/sections/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
    </>
  );
}