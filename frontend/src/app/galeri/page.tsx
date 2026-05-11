import { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Galeri kegiatan Bandung Karate Club Cabang Tulang Bawang."
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Dokumentasi latihan, kejuaraan, ujian, dan kegiatan sosial."
        description="Kumpulan momen yang merekam proses pembinaan, kebersamaan, dan prestasi anggota BKC Cabang Tulang Bawang."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
