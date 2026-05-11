import { CalendarDays, MapPin, Tag } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/cards/Card";
import type { EventItem } from "@/types";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-56">
        <Image src={event.image} alt={event.title} fill className="object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-md bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          <Tag className="h-3.5 w-3.5" /> {event.category}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-black text-white">{event.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-red-400" />{event.date}</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red-400" />{event.location}</span>
        </div>
        <p className="leading-7 text-slate-300">{event.description}</p>
      </div>
    </Card>
  );
}
