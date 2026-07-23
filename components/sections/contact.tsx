import { Mail, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Great
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'm always interested in discussing new opportunities,
            collaborating on exciting projects, or simply talking about
            technology.
          </p>

        </div>

        <div className="mx-auto mt-20 max-w-5xl grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-border p-8">

            <h3 className="text-2xl font-bold">
              Get In Touch
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <span>patelhimu2006@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/HimeshPatel6406"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/himesh-patel-81b660287"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                        LinkedIn
                </Button>
              </a>

            </div>

          </div>

          <div className="rounded-3xl border border-border p-8">

            <h3 className="text-2xl font-bold">
              Currently
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl border border-border p-5">
                <h4 className="font-semibold">
                  Open to Opportunities
                </h4>

                <p className="mt-2 text-muted-foreground">
                  Looking for internships, freelance work,
                  and full-time software engineering roles.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h4 className="font-semibold">
                  Response Time
                </h4>

                <p className="mt-2 text-muted-foreground">
                  I usually respond within 24 hours.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}