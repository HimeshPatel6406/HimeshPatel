import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20">

        {/* CTA */}

        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Let's build something meaningful together.
          </h2>

          <p className="max-w-xl text-muted-foreground">
            I'm always interested in collaborating on exciting
            projects, freelance opportunities, and full-time roles.
          </p>
        </div>

        {/* Footer Grid */}

        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-3">

          {/* Brand */}

          <div className="space-y-5">

            <Image
              src="/images/logos/logo-dark.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />

            <p className="max-w-xs text-sm text-muted-foreground">
              Building software that powers real businesses with
              clean code and thoughtful design.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-4 font-semibold">
              Connect
            </h3>

            <div className="flex flex-col gap-3 text-muted-foreground">

              <Link
                href="https://github.com/HimeshPatel6406"
                target="_blank"
              >
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/himesh-patel-81b660287"
                target="_blank"
              >
                LinkedIn
              </Link>

              <Link
                href="mailto:patelhimu2006@gmail.com"
              >
                Email
              </Link>

            </div>

          </div>

          {/* Signature */}

          <div className="flex flex-col items-start md:items-end">

            <Image
              src="/images/logos/signature-light.png"
              alt="Himesh Patel Signature"
              width={220}
              height={90}
              className="object-contain"
            />

            <p className="mt-5 text-sm text-muted-foreground">
              Designed & Developed by
            </p>

            <p className="font-semibold">
              Himesh Patel
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}