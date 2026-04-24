"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/#about" },
  { name: "Founder", href: "/founder" },
  { name: "Community", href: "/community" },
  { name: "Services", href: "/services" },
  {
    name: "Portfolio",
    href: "/portfolio",
    children: [
      { name: "Office", href: "/portfolio/office" },
      { name: "Retail", href: "/portfolio/retail" },
      { name: "Healthcare", href: "/portfolio/healthcare" },
      { name: "Residential", href: "/portfolio/residential" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-18 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-background/80 border-b border-border/30"
        }`}
      >
        <div className="h-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-full">

            {/* Brand */}
            <Link href="/" className="flex items-center" aria-label="Makeko Interiors">
              <Image
                src="/clear-logo.png"
                alt="Makeko Interiors"
                width={180}
                height={64}
                priority
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                      className={`relative top-0.5 flex items-center gap-1.5 text-[11px] tracking-widest uppercase font-light transition-colors duration-200 ${
                          pathname.startsWith(item.href)
                            ? "text-text"
                            : "text-text-muted hover:text-text"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={10}
                          className={`transition-transform duration-200 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-3 py-1 bg-background border border-border shadow-md min-w-40"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block px-5 py-3 text-[10px] tracking-widest uppercase font-light transition-colors ${
                                  pathname === child.href
                                    ? "text-text"
                                    : "text-text-muted hover:text-text hover:bg-surface"
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative text-[11px] tracking-widest uppercase font-light transition-colors duration-200 ${
                        pathname === item.href
                          ? "text-text"
                          : "text-text-muted hover:text-text"
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-text" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-text text-white! border border-white/20 text-[10px] tracking-[0.12em] uppercase font-medium hover:bg-text/80 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu  full-screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.32, 0, 0.67, 0] }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between h-18 px-6 border-b border-border">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center"
                aria-label="Makeko Interiors"
              >
                <Image
                  src="/Logo.png"
                  alt="Makeko Interiors"
                  width={180}
                  height={64}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 pt-6">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-5 border-b border-border text-[13px] tracking-widest uppercase font-light transition-colors ${
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-text"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-5">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block py-3.5 border-b border-border/40 text-[11px] tracking-[0.15em] uppercase font-light transition-colors ${
                            pathname === child.href
                              ? "text-text"
                              : "text-text-dim hover:text-text-muted"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="p-6 border-t border-border">
              <Link
                href="/contact"
                className="block text-center text-[11px] tracking-[0.12em] uppercase text-white! bg-text border border-white/20 py-4 font-medium hover:bg-text/80 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {openDropdown && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </>
  );
}
