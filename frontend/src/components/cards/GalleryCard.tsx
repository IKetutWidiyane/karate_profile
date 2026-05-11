"use client";

import Image from "next/image";
import type { GalleryItem } from "@/types";

type GalleryCardProps = {
  item: GalleryItem;
  onClick?: () => void;
};

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-72 w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] text-left shadow-panel outline-none transition duration-300 hover:-translate-y-1 hover:border-red-500/60 focus:ring-2 focus:ring-red-500"
    >
      <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white">{item.category}</span>
        <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
      </div>
    </button>
  );
}
