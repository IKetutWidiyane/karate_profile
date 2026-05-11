import { Metadata } from "next";
import { DojoCard } from "@/components/cards/DojoCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { dojos } from "@/data/site";

export const metadata: Metadata = {
  title: "Dojo",
  description: "Daftar dojo aktif Bandung Karate Club Cabang Tulang Bawang beserta jadwal, alamat, dan pelatih."
};

export default function DojoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dojo"
        title="Pilih dojo latihan terdekat."
        description="Setiap dojo BKC Cabang Tulang Bawang memiliki program latihan rutin, pelatih, dan komunitas yang mendukung perkembangan anggota."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dojos.map((dojo, index) => (
            <Reveal key={dojo.slug} delay={index * 0.06}>
              <DojoCard dojo={dojo} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
