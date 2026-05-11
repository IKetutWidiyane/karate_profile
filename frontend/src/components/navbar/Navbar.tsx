"use client";

import { Menu, Shield, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        solid ? "border-b border-white/10 bg-bkc-graphite/90 shadow-panel backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-red-600 shadow-glow">
            <Shield className="h-6 w-6 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase text-white">BKC</span>
            <span className="block max-w-[170px] text-xs font-semibold text-slate-300 sm:max-w-none">
              Cabang Tulang Bawang
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-red-600 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="hidden rounded-md bg-white px-4 py-2 text-sm font-black text-bkc-black transition hover:-translate-y-0.5 hover:bg-red-50 lg:inline-flex"
        >
          WhatsApp
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
          aria-label="Buka menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-bkc-graphite/95 px-4 pb-5 shadow-panel backdrop-blur-xl lg:hidden">
          <div className="container mx-auto grid gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10",
                  pathname === item.href && "bg-red-600 text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
