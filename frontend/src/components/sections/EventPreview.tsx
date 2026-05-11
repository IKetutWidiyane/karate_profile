import { EventCard } from "@/components/cards/EventCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { events } from "@/data/site";

export function EventPreview() {
  return (
    <section className="bg-[#070b14] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionTitle
              eyebrow="Kegiatan"
              title="Agenda terbaru cabang."
              description="Latihan gabungan, ujian, kejuaraan, seminar, dan gashuku tersusun untuk mendukung perkembangan anggota."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/kegiatan" variant="secondary">Lihat Kegiatan</Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (
            <Reveal key={event.title} delay={index * 0.06}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
