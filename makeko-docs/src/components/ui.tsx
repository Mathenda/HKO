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
      transition={{ duration: 0.2 }}
      whileHover={hover ? { y: -2 } : undefined}
      className={`bg-surface border border-border rounded-md p-6 ${className}`}
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
    default: "bg-surface text-text-dim border-border",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium border ${variants[variant]} ${className}`}
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
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-semibold text-text tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-text-muted mt-2">{subtitle}</p>
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
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";

  const variants = {
    primary: "bg-primary text-background hover:bg-primary-muted",
    secondary: "bg-secondary text-background hover:bg-indigo-400",
    outline: "border border-border text-text hover:bg-surface-hover",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
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
