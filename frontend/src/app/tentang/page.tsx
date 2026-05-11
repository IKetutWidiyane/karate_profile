import { Metadata } from "next";
import { Card } from "@/components/cards/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { organizationTimeline } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Sejarah, visi misi, struktur organisasi, dan perjalanan Bandung Karate Club Cabang Tulang Bawang."
};

const missions = [
  "Menyelenggarakan latihan karate yang disiplin, aman, dan berjenjang.",
  "Membina atlet berprestasi tanpa meninggalkan etika dan karakter.",
  "Memperkuat solidaritas antar-dojo di wilayah Tulang Bawang.",
  "Membangun organisasi cabang yang tertib, terbuka, dan profesional."
];

const structure = [
  ["Ketua Cabang", "H. Rahmat Suryadi"],
  ["Sekretaris", "Nadia Puspita"],
  ["Bendahara", "Yusuf Maulana"],
  ["Koordinator Pelatih", "Sensei Andri Wijaya"],
  ["Bidang Prestasi", "Sensei Rina Kartika"],
  ["Humas", "Dimas Prakoso"]
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Organisasi karate yang tumbuh dari disiplin dan kebersamaan."
        description="BKC Cabang Tulang Bawang menjadi rumah pembinaan bagi anggota dari berbagai usia, dengan semangat membentuk karakter, teknik, dan prestasi."
      />

      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <SectionTitle
              eyebrow="Sejarah"
              title="Dari tradisi BKC ke pembinaan cabang Tulang Bawang."
              description="Bandung Karate Club dikenal sebagai perguruan yang menekankan keteguhan mental, kedisiplinan, dan teknik karate yang kuat. Di Tulang Bawang, semangat itu dikembangkan melalui dojo-dojo aktif, latihan rutin, ujian berkala, dan program prestasi."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-6">
              <h3 className="text-2xl font-black text-white">Sambutan Ketua Cabang</h3>
              <p className="mt-4 leading-8 text-slate-300">
                Kami berkomitmen menjaga BKC Cabang Tulang Bawang sebagai organisasi yang rapi, terbuka, dan berorientasi pada pembinaan. Setiap anggota tidak hanya belajar teknik karate, tetapi juga belajar menghormati proses, pelatih, rekan, dan diri sendiri.
              </p>
              <p className="mt-5 font-bold text-red-300">H. Rahmat Suryadi</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#070b14] px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-7">
              <h2 className="text-3xl font-black text-white">Visi</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Menjadi cabang karate yang unggul dalam pembinaan karakter, prestasi, dan tata kelola organisasi profesional di Tulang Bawang.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full p-7">
              <h2 className="text-3xl font-black text-white">Misi</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                {missions.map((mission) => (
                  <li key={mission} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Reveal>
            <SectionTitle eyebrow="Timeline" title="Perjalanan organisasi." align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {organizationTimeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06}>
                <Card className="h-full p-6">
                  <p className="text-3xl font-black text-red-400">{item.year}</p>
                  <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070b14] px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Reveal>
            <SectionTitle eyebrow="Struktur" title="Struktur organisasi cabang." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {structure.map(([role, name], index) => (
              <Reveal key={role} delay={index * 0.04}>
                <Card className="p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-red-300">{role}</p>
                  <h3 className="mt-2 text-xl font-black text-white">{name}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
