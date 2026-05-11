import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.055] shadow-panel backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-white/[0.08]",
        className
      )}
    >
      {children}
    </div>
  );
}
