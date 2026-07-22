import TechBadge from "@/components/shared/TechBadge";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
];

const stats = [
  {
    value: "20+",
    label: "Reusable Components",
  },
  {
    value: "100%",
    label: "Responsive",
  },
  {
    value: "JWT",
    label: "Authentication",
  },
  {
    value: "MVC",
    label: "Architecture",
  },
];

export default function ProjectTech() {
  return (
    <div className="space-y-10">
      {/* Tech Stack */}

      <div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Project Stats */}

      <div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Highlights
        </p>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}

      <div className="rounded-2xl border border-border p-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Architecture
        </p>

        <div className="space-y-3 text-sm leading-7 text-muted-foreground">
          <p>• Modular component-based frontend using React & Next.js</p>

          <p>• REST API powered by Express.js</p>

          <p>• MongoDB database with Mongoose models</p>

          <p>• JWT authentication & protected routes</p>

          <p>• Responsive UI built with Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}