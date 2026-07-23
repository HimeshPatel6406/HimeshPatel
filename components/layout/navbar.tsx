"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "border-b bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logos/logo-dark.png"
            alt="Himesh Patel Logo"
            width={40}
            height={40}
            priority
            className="object-contain"
          />

          <div className="hidden sm:block">
            <h2 className="font-semibold tracking-wide">
              {SITE.name}
            </h2>

            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Software Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Resume */}

        <div className="hidden md:block">
          <Button>
            Resume
          </Button>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="flex flex-col gap-5 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}

            <Button>
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}