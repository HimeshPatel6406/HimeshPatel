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
    <section className="relative overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container>
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-20 py-20 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT CONTENT */}

          <FadeIn>
            <div className="max-w-2xl">

              <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
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
                I build scalable full-stack applications focused on solving
                real business problems using modern technologies,
                clean architecture, and exceptional user experiences.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">

                <Button size="lg" className="rounded-full px-7">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>

              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

            </div>
          </FadeIn>

          {/* RIGHT CONTENT */}
                    <FadeIn delay={0.2}>
            <div className="flex justify-center lg:justify-end">

              <div className="relative w-full max-w-lg">

                {/* Decorative Blur */}

                <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

                <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

                {/* Profile Card */}

                <div className="relative overflow-hidden rounded-[32px] border border-border bg-card p-5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">

                  {/* Status */}

                  <div className="mb-5 flex items-center justify-between">

                    <div className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">

                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                      Available for Work

                    </div>

                    <span className="text-xs text-muted-foreground">
                      2026
                    </span>

                  </div>

                  {/* Portrait */}

                  <div className="overflow-hidden rounded-[24px]">

                    <Image
                      src="/images/hero/portrait.jpeg"
                      alt="Himesh Patel"
                      width={700}
                      height={900}
                      priority
                      className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
                    />

                  </div>

                  {/* Info */}

                  <div className="mt-6">

                    <h3 className="text-2xl font-bold">
                      Himesh Patel
                    </h3>

                    <p className="mt-1 text-muted-foreground">
                      Full Stack Software Engineer
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">

                      <span>📍</span>

                      <span>Ahmedabad, Gujarat</span>

                    </div>

                  </div>

                  {/* Stats */}

                  <div className="mt-8 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-border p-5">

                      <p className="text-3xl font-bold">
                        5+
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Projects Delivered
                      </p>

                    </div>

                    <div className="rounded-2xl border border-border p-5">

                      <p className="text-3xl font-bold">
                        2+
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Years Learning
                      </p>

                    </div>

                  </div>
                                    {/* Bottom Divider */}

                  <div className="mt-8 border-t border-border pt-5">

                    <div className="flex items-center justify-between text-sm">

                      <div>
                        <p className="font-medium">
                          Currently Building
                        </p>

                        <p className="text-muted-foreground">
                          Modern Full Stack Applications
                        </p>
                      </div>

                      <div className="rounded-full border border-border px-4 py-2 font-medium">
                        Open to Opportunities
                      </div>

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