import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#070b14] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-red-radial" />
      <div className="absolute inset-0 bg-dojo-pattern bg-[size:36px_36px] opacity-30" />
      <Reveal className="container relative mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-300">Bergabung Bersama Kami</p>
        <h2 className="text-3xl font-black text-white sm:text-5xl">
          Mulai latihan karate dengan pembinaan yang disiplin, aman, dan profesional.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Terbuka untuk anak-anak, remaja, dan dewasa. Pilih dojo terdekat dan tim cabang akan membantu proses pendaftaran.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/pendaftaran">
            Daftar Sekarang <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={`https://wa.me/${siteConfig.whatsapp}`} variant="secondary">
            Hubungi WhatsApp <PhoneCall className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
