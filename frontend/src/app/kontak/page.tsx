import { Metadata } from "next";
import { Facebook, Instagram, Mail, MapPin, PhoneCall, Youtube } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/cards/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Kontak resmi Bandung Karate Club Cabang Tulang Bawang."
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi pengurus cabang."
        description="Dapatkan informasi pendaftaran, jadwal latihan, kegiatan, atau kerja sama organisasi melalui kanal resmi BKC Tulang Bawang."
      />
      <section className="bg-bkc-graphite px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              <Card className="p-6">
                <h2 className="text-2xl font-black text-white">Informasi Kontak</h2>
                <div className="mt-5 space-y-4 text-slate-300">
                  <p className="flex gap-3"><MapPin className="h-5 w-5 text-red-400" />{siteConfig.address}</p>
                  <p className="flex gap-3"><PhoneCall className="h-5 w-5 text-red-400" />{siteConfig.phone}</p>
                  <p className="flex gap-3"><Mail className="h-5 w-5 text-red-400" />{siteConfig.email}</p>
                </div>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="mt-6 inline-flex rounded-md bg-red-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-red-500"
                >
                  WhatsApp Pengurus
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-black text-white">Media Sosial</h3>
                <div className="mt-5 flex gap-3">
                  <Link href={siteConfig.socials.instagram} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white hover:bg-red-600" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
                  <Link href={siteConfig.socials.facebook} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white hover:bg-red-600" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
                  <Link href={siteConfig.socials.youtube} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white hover:bg-red-600" aria-label="YouTube"><Youtube className="h-5 w-5" /></Link>
                </div>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal className="container mx-auto mt-10">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]">
            <iframe
              title="Peta Tulang Bawang"
              src="https://www.google.com/maps?q=Tulang%20Bawang%20Lampung&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
