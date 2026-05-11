import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Award, CalendarDays, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/cards/Card";
import { EventCard } from "@/components/cards/EventCard";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { dojos, events, gallery, trainers } from "@/data/site";

type Params = {
  params: { slug: string };
};

export function generateStaticParams() {
  return dojos.map((dojo) => ({ slug: dojo.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const dojo = dojos.find((item) => item.slug === params.slug);
  return {
    title: dojo ? dojo.name : "Dojo",
    description: dojo?.description
  };
}

export default function DojoDetailPage({ params }: Params) {
  const dojo = dojos.find((item) => item.slug === params.slug);
  if (!dojo) notFound();

  const trainer = trainers.find((item) => dojo.trainer.includes(item.name.replace("Sensei ", ""))) ?? trainers[0];

  return (
    <>
      <PageHeader eyebrow="Detail Dojo" title={dojo.name} description={dojo.description} />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <div className="relative h-[440px] overflow-hidden rounded-lg border border-white/10">
              <Image src={dojo.image} alt={dojo.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-6">
              <h2 className="text-2xl font-black text-white">Informasi Dojo</h2>
              <div className="mt-5 space-y-4 text-slate-300">
                <p className="flex gap-3"><MapPin className="h-5 w-5 text-red-400" />{dojo.address}</p>
                <p className="flex gap-3"><CalendarDays className="h-5 w-5 text-red-400" />{dojo.schedule}</p>
                <p className="flex gap-3"><Users className="h-5 w-5 text-red-400" />{dojo.members}+ anggota aktif</p>
                <p className="flex gap-3"><Award className="h-5 w-5 text-red-400" />Pelatih: {dojo.trainer}</p>
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card className="h-full p-6">
              <h3 className="text-xl font-black text-white">Pelatih</h3>
              <p className="mt-3 text-slate-300">{trainer.name}</p>
              <p className="mt-1 font-bold text-red-300">{trainer.rank}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{trainer.specialty}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="h-full p-6">
              <h3 className="text-xl font-black text-white">Prestasi</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {dojo.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-red-500" />{achievement}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full p-6">
              <h3 className="text-xl font-black text-white">Jadwal</h3>
              <p className="mt-3 text-slate-300">{dojo.schedule}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Anggota disarankan hadir 15 menit sebelum latihan untuk pemanasan mandiri dan persiapan barisan.</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#070b14] px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black text-white">Galeri Dojo</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {gallery.slice(0, 3).map((item) => (
              <GalleryCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black text-white">Kegiatan Terbaru</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
