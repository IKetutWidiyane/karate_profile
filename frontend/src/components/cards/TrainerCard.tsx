import { Award, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/cards/Card";
import type { Trainer } from "@/types";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <Card className="group overflow-hidden p-6 text-center">
      <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-red-500/70 bg-slate-900 shadow-glow">
        <Image src={trainer.image} alt={trainer.name} width={180} height={180} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-black text-white">{trainer.name}</h3>
      <p className="mt-1 text-sm font-bold text-red-300">{trainer.rank}</p>
      <div className="mt-5 space-y-3 text-left text-sm text-slate-300">
        <p className="flex gap-3"><Award className="h-4 w-4 shrink-0 text-red-400" />{trainer.experience}</p>
        <p className="flex gap-3"><ShieldCheck className="h-4 w-4 shrink-0 text-red-400" />Dojo {trainer.dojo}</p>
        <p className="flex gap-3"><Target className="h-4 w-4 shrink-0 text-red-400" />{trainer.specialty}</p>
      </div>
    </Card>
  );
}
