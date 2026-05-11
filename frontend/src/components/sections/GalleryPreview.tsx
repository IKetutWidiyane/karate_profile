import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { gallery } from "@/data/site";

export function GalleryPreview() {
  return (
    <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionTitle
              eyebrow="Galeri"
              title="Momen latihan dan prestasi."
              description="Dokumentasi kegiatan cabang sebagai jejak pembinaan, kebersamaan, dan pencapaian anggota."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/galeri" variant="secondary">Buka Galeri</Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.slice(0, 4).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="group relative h-72 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white">{item.category}</span>
                  <h3 className="mt-3 font-black text-white">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
