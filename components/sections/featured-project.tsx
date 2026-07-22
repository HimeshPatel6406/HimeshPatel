import { Container } from "@/components/shared/container";
import ProjectHeader from "@/components/projects/project-header";
import ProjectGallery from "@/components/projects/project-gallery";
import ProjectTech from "@/components/projects/project-tech";
import ProjectDetails from "@/components/projects/project-details";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-background py-32"
    >
      <Container>
        <div className="space-y-20">

          <ProjectHeader />

          <ProjectGallery />

          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">

            <ProjectDetails />

            <ProjectTech />

          </div>

        </div>
      </Container>
    </section>
  );
}