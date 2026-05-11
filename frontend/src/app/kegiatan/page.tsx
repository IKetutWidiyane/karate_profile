import { Metadata } from "next";
import { EventCard } from "@/components/cards/EventCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { events } from "@/data/site";

export const metadata: Metadata = {
  title: "Kegiatan",
  description: "Agenda latihan gabungan, ujian, kejuaraan, seminar, dan gashuku BKC Tulang Bawang."
};

export default function KegiatanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kegiatan"
        title="Agenda organisasi yang aktif dan terarah."
        description="Seluruh kegiatan disusun untuk menjaga standar latihan, meningkatkan prestasi, dan memperkuat solidaritas antar-dojo."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.05}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
