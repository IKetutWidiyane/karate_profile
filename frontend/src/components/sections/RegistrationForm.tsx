"use client";

import { CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { dojos } from "@/data/site";

type Errors = Partial<Record<"name" | "age" | "gender" | "dojo" | "phone", string>>;

export function RegistrationForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(data.get("name") || "").trim();
    const age = Number(data.get("age"));
    const gender = String(data.get("gender") || "");
    const dojo = String(data.get("dojo") || "");
    const phone = String(data.get("phone") || "").trim();

    if (name.length < 3) nextErrors.name = "Nama minimal 3 karakter.";
    if (!age || age < 5) nextErrors.age = "Umur minimal 5 tahun.";
    if (!gender) nextErrors.gender = "Pilih jenis kelamin.";
    if (!dojo) nextErrors.dojo = "Pilih dojo latihan.";
    if (phone.length < 9) nextErrors.phone = "Nomor HP belum valid.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur">
      {sent ? (
        <div className="mb-6 flex gap-3 rounded-md border border-green-400/30 bg-green-500/10 p-4 text-sm text-green-100">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Data pendaftaran berhasil divalidasi. Tim cabang dapat menghubungi calon anggota melalui nomor HP yang diisi.
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nama Lengkap" name="name" error={errors.name} />
        <Field label="Umur" name="age" type="number" error={errors.age} />
        <Select label="Jenis Kelamin" name="gender" error={errors.gender} options={["Laki-laki", "Perempuan"]} />
        <Select label="Dojo Pilihan" name="dojo" error={errors.dojo} options={dojos.map((dojo) => dojo.name)} />
        <Field label="Nomor HP" name="phone" error={errors.phone} />
        <Select label="Pengalaman Karate" name="experience" options={["Belum pernah", "Pernah latihan", "Pernah ikut kejuaraan"]} />
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-bold text-white">Catatan Tambahan</span>
        <textarea
          name="note"
          rows={5}
          className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
          placeholder="Contoh: tujuan latihan, riwayat sabuk, atau jadwal yang diinginkan"
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-red-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-red-500 md:w-auto"
      >
        Kirim Pendaftaran
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white">{label}</span>
      <input
        name={name}
        type={type}
        className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
      />
      {error ? <span className="mt-2 block text-xs font-semibold text-red-300">{error}</span> : null}
    </label>
  );
}

function Select({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white">{label}</span>
      <select
        name={name}
        className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-red-500"
        defaultValue=""
      >
        <option value="" className="bg-bkc-graphite">Pilih opsi</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-bkc-graphite">
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="mt-2 block text-xs font-semibold text-red-300">{error}</span> : null}
    </label>
  );
}
