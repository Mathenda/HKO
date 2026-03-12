"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  Layers,
  User,
  Users,
  Phone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Overview", href: "/" },
  { name: "Services", href: "/services", icon: Wrench },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: Building2,
    children: [
      { name: "Office", href: "/portfolio/office" },
      { name: "Retail", href: "/portfolio/retail" },
      { name: "Healthcare", href: "/portfolio/healthcare" },
      { name: "Residential", href: "/portfolio/residential" },
    ],
  },
  { name: "Process", href: "/process", icon: Layers },
  { name: "Founder", href: "/founder", icon: User },
  { name: "Community", href: "/community", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (name: string) => {
    setExpandedSections((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-background border-b border-border z-40">
        <div className="h-full px-4 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div>
                <h1 className="text-lg font-semibold text-text tracking-tight">
                  Makeko Interiors
                </h1>
                <p className="text-xs text-text-dim">
                  Technical Design Studio
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSection(item.name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          pathname.startsWith(item.href)
                            ? "bg-surface text-text"
                            : "text-text-muted hover:text-text hover:bg-surface-hover"
                        }`}
                      >
                        {item.icon && <item.icon size={16} />}
                        <span>{item.name}</span>
                        <motion.span
                          animate={{
                            rotate: expandedSections.includes(item.name)
                              ? 180
                              : 0,
                          }}
                          transition={{ duration: 0.15 }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                      </button>
                      {expandedSections.includes(item.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 py-2 bg-background border border-border rounded-md shadow-lg min-w-[160px] overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-surface text-text"
                                  : "text-text-dim hover:text-text hover:bg-surface-hover"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-surface text-text"
                          : "text-text-muted hover:text-text hover:bg-surface-hover"
                      }`}
                    >
                      {item.icon && <item.icon size={16} />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-surface border border-border text-text-muted hover:text-text transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[70px] left-0 right-0 bg-background border-b border-border z-30 transition-transform duration-200 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="p-4 max-h-[calc(100vh-70px)] overflow-y-auto">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        pathname.startsWith(item.href)
                          ? "bg-surface text-text"
                          : "text-text-muted hover:text-text hover:bg-surface-hover"
                      }`}
                    >
                      {item.icon && <item.icon size={18} />}
                      <span className="flex-1 text-left">{item.name}</span>
                      <motion.span
                        animate={{
                          rotate: expandedSections.includes(item.name)
                            ? 180
                            : 0,
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                    {expandedSections.includes(item.name) && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="ml-8 mt-1 space-y-1 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                                pathname === child.href
                                  ? "bg-surface text-text"
                                  : "text-text-dim hover:text-text hover:bg-surface-hover"
                              }`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-surface text-text"
                        : "text-text-muted hover:text-text hover:bg-surface-hover"
                    }`}
                  >
                    {item.icon && <item.icon size={18} />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile Footer */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-text-dim">© 2024 Makeko Interiors</p>
            <p className="text-xs text-text-dim mt-1">
              Johannesburg, South Africa
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
