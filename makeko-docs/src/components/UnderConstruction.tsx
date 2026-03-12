"use client";

import { motion } from "framer-motion";
import { Hammer, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-surface border border-border">
            <Hammer size={32} className="text-text-muted" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-light text-text leading-[0.94] tracking-tight mb-6"
        >
          Under Construction
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-16 h-px bg-border mb-8 mx-auto"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-muted text-sm max-w-md leading-relaxed mb-12"
        >
          We&apos;re building something beautiful. Our new website is currently
          under construction and will be launching soon.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Hammer, label: "Building", desc: "New experience" },
            { icon: Clock, label: "Coming", desc: "Very soon" },
            { icon: ArrowRight, label: "Stay", desc: "Tuned" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-6 bg-surface border border-border"
            >
              <item.icon size={18} className="text-text-dim mb-3" />
              <span className="label-caps mb-1">{item.label}</span>
              <span className="text-xs text-text-muted font-light">{item.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col items-center"
        >
          <Link href="/" className="flex flex-col items-center leading-[1.15] group">
            <span className="text-[22px] font-light tracking-[0.04em] text-text group-hover:text-text-muted transition-colors">
              Makeko
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-text-muted font-light">
              Interiors
            </span>
          </Link>
          <p className="text-xs text-text-dim mt-6 font-light">
            Est. 2018 &middot; Johannesburg
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom border accent */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-text" />
    </div>
  );
}
