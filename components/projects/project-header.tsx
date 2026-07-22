import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function ProjectHeader() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
          Featured Project
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Oil Broker
          <br />
          Management System
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A full-stack business management platform developed for a real cooking
          oil broker. It streamlines daily transactions, generates reports,
          manages parties, and provides a modern dashboard for efficient
          operations.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline">
            GitHub
        </Button>

        <Button>
          Live Demo
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}