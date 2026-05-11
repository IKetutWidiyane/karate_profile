"use client";

import { CalendarDays, Clock, MapPin, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { schedules } from "@/data/site";

export function ScheduleTable() {
  const [dojo, setDojo] = useState("Semua");
  const dojoOptions = ["Semua", ...schedules.map((item) => item.dojo)];
  const filtered = useMemo(() => (dojo === "Semua" ? schedules : schedules.filter((item) => item.dojo === dojo)), [dojo]);

  return (
    <div>
      <div className="mb-6 max-w-sm">
        <label htmlFor="dojo-filter" className="mb-2 block text-sm font-bold text-white">
          Filter Dojo
        </label>
        <select
          id="dojo-filter"
          value={dojo}
          onChange={(event) => setDojo(event.target.value)}
          className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-red-500"
        >
          {dojoOptions.map((option) => (
            <option key={option} value={option} className="bg-bkc-graphite">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden overflow-hidden rounded-lg border border-white/10 md:block">
        <table className="w-full border-collapse bg-white/[0.045] text-left">
          <thead className="bg-white/10 text-sm uppercase tracking-[0.12em] text-slate-300">
            <tr>
              <th className="px-5 py-4">Dojo</th>
              <th className="px-5 py-4">Hari</th>
              <th className="px-5 py-4">Jam</th>
              <th className="px-5 py-4">Lokasi</th>
              <th className="px-5 py-4">Pelatih</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm text-slate-300">
            {filtered.map((item) => (
              <tr key={item.dojo} className="transition hover:bg-white/[0.06]">
                <td className="px-5 py-5 font-bold text-white">{item.dojo}</td>
                <td className="px-5 py-5">{item.day}</td>
                <td className="px-5 py-5">{item.time}</td>
                <td className="px-5 py-5">{item.location}</td>
                <td className="px-5 py-5">{item.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {filtered.map((item) => (
          <div key={item.dojo} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
            <h3 className="text-lg font-black text-white">{item.dojo}</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p className="flex gap-3"><CalendarDays className="h-4 w-4 text-red-400" />{item.day}</p>
              <p className="flex gap-3"><Clock className="h-4 w-4 text-red-400" />{item.time}</p>
              <p className="flex gap-3"><MapPin className="h-4 w-4 text-red-400" />{item.location}</p>
              <p className="flex gap-3"><UserRound className="h-4 w-4 text-red-400" />{item.trainer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
