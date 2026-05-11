import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-bkc-graphite pt-32">
      <div className="absolute inset-0 bg-red-radial" />
      <div className="absolute inset-0 bg-dojo-pattern bg-[size:36px_36px] opacity-40" />
      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-400">{eyebrow}</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
