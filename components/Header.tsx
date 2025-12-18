"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect visible sections for scroll-based highlighting
      const sections = ["approach", "impact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 100;
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      style={{ height: "90px" }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <Image
              src="/assets/tesla.png"
              alt="logo"
              width={110}
              height={110}
              className="object-cover"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-heading">
            {[
              { id: "/", label: "HOME" },
              { id: "/products", label: "PRODUCTS" },
              { id: "/about", label: "ABOUT" },
            ].map((link) => (
              <Link
                key={link.id}
                href={link.id}
                className={`text-sm font-medium transition-all ${
                  pathname === link.id
                    ? "text-black underline underline-offset-4"
                    : "text-foreground hover:text-black/80"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/"
              className="rounded-full bg-black text-white hover:bg-black/90 px-4 py-1.5 text-[12px] transition-all"
            >
              Start NOW
            </Link>
          </nav>

          <Link
            href="/products"
            className="text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70 pr-0 md:pr-8 flex items-center gap-1"
          >
            <CiSearch size={26} />
            <span>SEARCH</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
