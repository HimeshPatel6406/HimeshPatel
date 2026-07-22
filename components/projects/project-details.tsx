import {
  CheckCircle2,
  Database,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Party Management",
    description:
      "Manage buyers and sellers independently while maintaining accurate transaction records.",
  },
  {
    icon: FileText,
    title: "Transaction Reports",
    description:
      "Generate detailed reports with calculations, summaries and printable records.",
  },
  {
    icon: Database,
    title: "Secure Database",
    description:
      "MongoDB stores business data efficiently with a scalable backend architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    description:
      "JWT authentication ensures only authorized users can access business data.",
  },
];

export default function ProjectDetails() {
  return (
    <div>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Case Study
      </p>

      <h3 className="text-3xl font-bold">
        Built to simplify real business operations.
      </h3>

      <p className="mt-6 leading-8 text-muted-foreground">
        This project was developed for a cooking oil broker to replace manual
        bookkeeping with a centralized web application. It allows users to
        manage transactions, maintain party records, generate reports and
        monitor business activities from a single dashboard.
      </p>

      <div className="mt-10 space-y-6">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex gap-4 rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-semibold">
                  {feature.title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6" />

          <h4 className="text-lg font-semibold">
            Key Outcome
          </h4>
        </div>

        <p className="mt-4 leading-8 text-muted-foreground">
          The application digitizes day-to-day business workflows, reduces
          manual errors, improves reporting speed and provides a scalable
          foundation for future features like inventory tracking and analytics.
        </p>
      </div>
    </div>
  );
}