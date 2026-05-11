import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-bkc-graphite",
        variant === "primary" &&
          "bg-red-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-red-500",
        variant === "secondary" &&
          "border border-white/20 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:border-red-400 hover:bg-red-500/20",
        variant === "ghost" && "text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
