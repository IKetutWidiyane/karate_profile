import { TrainerCard } from "@/components/cards/TrainerCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { trainers } from "@/data/site";

export function TrainerPreview() {
  return (
    <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionTitle
              eyebrow="Pelatih"
              title="Dibimbing sensei berpengalaman."
              description="Tim pelatih menggabungkan disiplin tradisi karate dengan pendekatan pembinaan modern dan terukur."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/pelatih" variant="secondary">Profil Pelatih</Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 0.06}>
              <TrainerCard trainer={trainer} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
