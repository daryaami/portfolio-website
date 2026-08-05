import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-transparent",
  secondary:
    "bg-white text-foreground border border-border hover:border-accent/40 hover:text-accent",
  ghost:
    "bg-transparent text-foreground-muted border border-transparent hover:text-accent",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

export function Button({
  children,
  variant = "primary",
  href,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
