import { Quote, Target, Trophy } from "lucide-react";
import { Card } from "@/components/cards/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutPreview() {
  return (
    <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <SectionTitle
            eyebrow="Tentang BKC"
            title="Tradisi bela diri yang membentuk manusia berkarakter."
            description="Bandung Karate Club Cabang Tulang Bawang hadir sebagai ruang latihan, pembinaan, dan prestasi. Setiap anggota diarahkan untuk tumbuh dalam disiplin, hormat, keberanian, dan tanggung jawab."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="p-5">
              <Target className="mb-4 h-8 w-8 text-red-400" />
              <h3 className="font-black text-white">Visi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Menjadi cabang karate yang unggul dalam karakter, prestasi, dan pelayanan organisasi.
              </p>
            </Card>
            <Card className="p-5">
              <Trophy className="mb-4 h-8 w-8 text-red-400" />
              <h3 className="font-black text-white">Misi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Membina atlet secara terstruktur, menjaga etika dojo, dan mengembangkan kegiatan positif.
              </p>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-red-radial opacity-60" />
            <div className="relative">
              <Quote className="mb-6 h-12 w-12 text-red-400" />
              <p className="text-2xl font-black leading-snug text-white">
                “Karate bukan hanya tentang menang bertanding, tetapi tentang menguasai diri sebelum menghadapi lawan.”
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-red-200">
                Filosofi Latihan BKC
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
