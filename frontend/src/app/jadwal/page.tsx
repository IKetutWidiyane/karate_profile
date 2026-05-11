import { Metadata } from "next";
import { ScheduleTable } from "@/components/sections/ScheduleTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Jadwal Latihan",
  description: "Jadwal latihan dojo Bandung Karate Club Cabang Tulang Bawang."
};

export default function JadwalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jadwal Latihan"
        title="Jadwal latihan rutin setiap dojo."
        description="Gunakan filter untuk melihat jadwal dojo tertentu. Jadwal dapat berubah mengikuti agenda cabang atau kegiatan kejuaraan."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="container mx-auto">
          <ScheduleTable />
        </Reveal>
      </section>
    </>
  );
}
