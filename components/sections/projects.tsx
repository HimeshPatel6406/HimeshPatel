import { Container } from "@/components/shared/container";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="all-projects"
      className="border-t border-border bg-background py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Selected Work
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            More Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A collection of projects focused on solving real-world problems
            through modern web technologies.
          </p>

        </div>

        <div className="mt-20 space-y-16">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}