import { Metadata } from "next";
import { TrainerCard } from "@/components/cards/TrainerCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { trainers } from "@/data/site";

export const metadata: Metadata = {
  title: "Pelatih",
  description: "Profil pelatih Bandung Karate Club Cabang Tulang Bawang."
};

export default function PelatihPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pelatih"
        title="Sensei yang membina teknik, mental, dan karakter."
        description="Pelatih BKC Cabang Tulang Bawang berfokus pada keselamatan latihan, kedisiplinan, dan perkembangan tiap anggota."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 0.06}>
              <TrainerCard trainer={trainer} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
