import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`bg-surface border p-6 transition-colors duration-300 ${hover ? "border-border hover:border-primary" : "border-border"} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-transparent text-text-dim border-border",
    primary: "bg-transparent text-primary border-primary/40",
    secondary: "bg-transparent text-secondary border-secondary/40",
    accent: "bg-transparent text-accent border-accent/40",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] font-light tracking-[0.2em] uppercase border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="font-display text-3xl lg:text-4xl font-light text-text">
        {children}
      </h2>
      {subtitle && (
        <p className="text-text-muted mt-3 text-sm font-light">{subtitle}</p>
      )}
    </div>
  );
}

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  as: Component = "button",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-light text-[11px] tracking-[0.18em] uppercase transition-colors duration-200";

  const variants = {
    primary: "bg-primary text-background hover:bg-primary-muted",
    secondary: "bg-surface border border-border text-text-muted hover:border-text-muted hover:text-text",
    outline: "border border-border text-text-muted hover:border-primary hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const MotionComponent = Component === "a" ? motion.a : motion.button;

  return (
    <MotionComponent
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      {...(props as any)}
    >
      {children}
    </MotionComponent>
  );
}
