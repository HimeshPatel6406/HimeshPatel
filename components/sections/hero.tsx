"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

import FadeIn from "@/components/animation/fade-in";
import { Container } from "@/components/shared/container";
import TechBadge from "@/components/shared/TechBadge";
import { Button } from "@/components/ui/button";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
];

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <FadeIn>
            <div className="max-w-2xl">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-muted-foreground">
                Software Engineer
              </p>

              <h1 className="text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
                Building software
                <br />
                that powers
                <br />
                real businesses.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                I build scalable full-stack applications with modern
                technologies, clean architecture, and a focus on solving
                real business problems.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Button size="lg">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}

          <FadeIn delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="group w-full max-w-md">
                <div className="overflow-hidden rounded-[32px] border border-border bg-card p-4 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <Image
                    src="/images/hero/portrait.jpeg"
                    alt="Himesh Patel"
                    width={550}
                    height={700}
                    priority
                    className="rounded-[24px] object-cover"
                  />

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">
                        Himesh Patel
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Software Engineer
                      </p>
                    </div>

                    <div className="rounded-full border px-3 py-1 text-xs">
                      India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}