import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import TechBadge from "@/components/shared/TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Project Image */}

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="w-full object-cover transition duration-700 hover:scale-[1.03]"
        />
      </div>

      {/* Content */}

      <div className="space-y-6 p-8">

        <div>
          <h3 className="text-3xl font-bold">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {tech.map((item) => (
            <TechBadge key={item} name={item} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4">

        <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
        >
            <Button variant="outline">
                GitHub
            </Button>
        </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
         >
            <Button>
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
        </a>

        </div>

      </div>

    </article>
  );
}