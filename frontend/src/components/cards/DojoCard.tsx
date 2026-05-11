import { MapPin, Users, Clock, UserRound } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/cards/Card";
import type { Dojo } from "@/types";

export function DojoCard({ dojo }: { dojo: Dojo }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-56">
        <Image src={dojo.image} alt={dojo.name} fill className="object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white">
          {dojo.members}+ anggota
        </div>
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-black text-white">{dojo.name}</h3>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />{dojo.address}</p>
          <p className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />{dojo.schedule}</p>
          <p className="flex gap-3"><UserRound className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />{dojo.trainer}</p>
          <p className="flex gap-3"><Users className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />Pembinaan aktif dan terstruktur</p>
        </div>
        <Button href={`/dojo/${dojo.slug}`} variant="secondary" className="w-full">Detail Dojo</Button>
      </div>
    </Card>
  );
}
