"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur">
      {sent ? <p className="mb-5 rounded-md bg-green-500/10 p-4 text-sm font-semibold text-green-100">Pesan berhasil disiapkan.</p> : null}
      <div className="grid gap-5">
        <input className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-red-500" placeholder="Nama" required />
        <input type="email" className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-red-500" placeholder="Email" required />
        <textarea rows={6} className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-red-500" placeholder="Pesan" required />
      </div>
      <button type="submit" className="mt-6 rounded-md bg-red-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-red-500">
        Kirim Pesan
      </button>
    </form>
  );
}
