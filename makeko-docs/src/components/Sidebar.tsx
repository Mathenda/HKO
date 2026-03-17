"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building2,
  Wrench,
  Layers,
  Hammer,
  Palette,
  Package,
  User,
  Users,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
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

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (name: string) => {
    setExpandedSections((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-surface border border-border text-text-muted hover:text-text transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] bg-background border-r border-border transition-transform duration-200 ease-in-out z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="p-6 border-b border-border">
            <Link href="/" className="block">
              <h1 className="text-lg font-semibold text-text tracking-tight">
                Makeko Interiors
              </h1>
              <p className="text-xs text-text-dim mt-1">
                Technical Design Studio
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
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
                        <item.icon size={18} className="shrink-0" />
                        <span className="flex-1 text-left">{item.name}</span>
                        <motion.span
                          className="flex"
                          animate={{
                            rotate: expandedSections.includes(item.name)
                              ? 180
                              : 0,
                          }}
                          transition={{ duration: 0.15 }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 4L10 8L6 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
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
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-text-dim">
              © 2024 Makeko Interiors
            </p>
            <p className="text-xs text-text-dim mt-1">
              Johannesburg, South Africa
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
