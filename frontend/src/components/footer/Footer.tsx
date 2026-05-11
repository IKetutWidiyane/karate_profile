import { Facebook, Instagram, Mail, MapPin, Shield, Youtube } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b14]">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-red-600 shadow-glow">
              <Shield className="h-7 w-7 text-white" />
            </span>
            <div>
              <p className="font-black text-white">BKC Tulang Bawang</p>
              <p className="text-sm text-slate-400">Karakter. Disiplin. Prestasi.</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-400">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-white">Navigasi</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-400 transition hover:text-red-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-white">Kontak Cabang</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-red-400" />{siteConfig.address}</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-red-400" />{siteConfig.email}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-white">Media Sosial</h3>
          <div className="flex gap-3">
            <Link href={siteConfig.socials.instagram} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition hover:bg-red-600" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href={siteConfig.socials.facebook} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition hover:bg-red-600" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href={siteConfig.socials.youtube} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition hover:bg-red-600" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
