import { DojoCard } from "@/components/cards/DojoCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { dojos } from "@/data/site";

export function DojoPreview() {
  return (
    <section className="relative overflow-hidden bg-[#070b14] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-dojo-pattern bg-[size:36px_36px] opacity-35" />
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionTitle
              eyebrow="Dojo Aktif"
              title="Temukan tempat latihan terdekat."
              description="Setiap dojo memiliki program latihan yang rapi, pelatih berpengalaman, dan lingkungan pembinaan yang aman."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/dojo" variant="secondary">Lihat Semua Dojo</Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dojos.map((dojo, index) => (
            <Reveal key={dojo.slug} delay={index * 0.06}>
              <DojoCard dojo={dojo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
