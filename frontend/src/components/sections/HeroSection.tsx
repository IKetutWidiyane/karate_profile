"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "15+", label: "Dojo" },
  { value: "300+", label: "Anggota" },
  { value: "50+", label: "Prestasi" }
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bkc-graphite pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1800&q=85')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#111827]/85 to-[#111827]/40" />
      <div className="absolute inset-0 bg-dojo-pattern bg-[size:38px_38px] opacity-35" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bkc-graphite to-transparent" />

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-red-400" />
            Organisasi Karate Resmi dan Profesional
          </div>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Membangun Karakter, Disiplin, dan Prestasi Bersama
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-slate-200 sm:text-xl">
            Bandung Karate Club Cabang Tulang Bawang
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Wadah pembinaan karate modern untuk membentuk mental tangguh, teknik kuat, dan etika dojo yang berkelas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/pendaftaran">
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/dojo" variant="secondary">
              Lihat Dojo <MapPin className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/10 backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 px-4 py-5 last:border-r-0">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-red-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
