import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import FeaturedProject from "@/components/sections/featured-project";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}