import { Container } from "@/components/shared/container";
import TechBadge from "@/components/shared/TechBadge";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-muted/30 py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Tech Stack
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I enjoy building modern, scalable applications using technologies
            that are fast, reliable and production-ready.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <TechBadge
                    key={skill}
                    name={skill}
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}