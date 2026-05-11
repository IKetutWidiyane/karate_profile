import { Metadata } from "next";
import { Card } from "@/components/cards/Card";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pendaftaran",
  description: "Form pendaftaran anggota baru Bandung Karate Club Cabang Tulang Bawang."
};

export default function PendaftaranPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pendaftaran"
        title="Daftar menjadi anggota BKC Tulang Bawang."
        description="Isi data calon anggota, pilih dojo terdekat, dan tim cabang akan membantu proses konfirmasi latihan pertama."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <Card className="p-6">
              <h2 className="text-2xl font-black text-white">Informasi Pendaftaran</h2>
              <div className="mt-5 space-y-4 text-slate-300">
                <p>Terbuka untuk anak-anak, remaja, dan dewasa.</p>
                <p>Calon anggota dapat mengikuti latihan percobaan sesuai jadwal dojo pilihan.</p>
                <p>Gunakan pakaian olahraga yang nyaman saat latihan pertama.</p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <RegistrationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
