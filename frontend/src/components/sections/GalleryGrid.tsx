"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { gallery } from "@/data/site";
import type { GalleryItem } from "@/types";

const categories = ["Semua", "Latihan", "Kejuaraan", "Ujian", "Sosial"] as const;

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () => (active === "Semua" ? gallery : gallery.filter((item) => item.category === active)),
    [active]
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-md px-4 py-2 text-sm font-bold transition ${
              active === category ? "bg-red-600 text-white" : "bg-white/10 text-slate-200 hover:bg-white/15"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <GalleryCard key={item.title} item={item} onClick={() => setSelected(item)} />
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition hover:bg-red-600"
            aria-label="Tutup preview"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-bkc-graphite">
            <Image src={selected.image} alt={selected.title} fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">
              <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white">{selected.category}</span>
              <h3 className="mt-3 text-2xl font-black text-white">{selected.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
