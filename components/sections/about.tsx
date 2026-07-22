import Image from "next/image";
import { Container } from "@/components/shared/container";
import { CheckCircle2 } from "lucide-react";

const achievements = [
  "Built real business software",
  "Full Stack MERN Developer",
  "Focused on scalable architecture",
  "Passionate about solving business problems",
];

const journey = [
  {
    year: "2023",
    title: "Started Programming",
    description:
      "Began learning programming fundamentals and problem solving.",
  },
  {
    year: "2024",
    title: "Learned Full Stack Development",
    description:
      "Built multiple web applications using the MERN stack.",
  },
  {
    year: "2025",
    title: "Built Oil Broker Management System",
    description:
      "Developed software for a real business to digitize operations.",
  },
  {
    year: "2026",
    title: "Building Production Ready Projects",
    description:
      "Creating modern applications focused on performance and user experience.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background py-32"
    >
      <Container>

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Software Engineer
            <br />
            solving real problems.
          </h2>

        </div>

        <div className="grid gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <Image
              src="/images/hero/portrait.jpeg"
              alt="Himesh Patel"
              width={700}
              height={900}
              className="rounded-3xl border border-border"
            />

            <div className="mt-8 rounded-3xl border border-border p-8">

              <h3 className="text-2xl font-bold">
                Who I Am
              </h3>

              <p className="mt-6 leading-8 text-muted-foreground">
                I'm Himesh Patel, a Full Stack Developer passionate about
                building software that solves real-world business problems.
                I enjoy creating modern web applications with clean
                architecture, scalable backend systems and intuitive user
                experiences.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h3 className="text-2xl font-bold">
              Highlights
            </h3>

            <div className="mt-8 space-y-5">

              {achievements.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-border p-5"
                >
                  <CheckCircle2 className="h-5 w-5" />

                  <p>{item}</p>
                </div>
              ))}

            </div>

            <div className="mt-14">

              <h3 className="text-2xl font-bold">
                Journey
              </h3>

              <div className="mt-8 space-y-8">

                {journey.map((step) => (

                  <div
                    key={step.year}
                    className="border-l-2 border-border pl-6"
                  >

                    <span className="text-sm text-muted-foreground">
                      {step.year}
                    </span>

                    <h4 className="mt-1 text-xl font-semibold">
                      {step.title}
                    </h4>

                    <p className="mt-2 leading-7 text-muted-foreground">
                      {step.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}