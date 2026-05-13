import type { Dojo, EventItem, GalleryItem, Trainer } from "@/types";

export const siteConfig = {
  name: "Bandung Karate Club Cabang Tulang Bawang",
  shortName: "BKC Tulang Bawang",
  description:
    "Website resmi Bandung Karate Club Cabang Tulang Bawang untuk informasi dojo, pelatih, kegiatan, jadwal latihan, dan pendaftaran anggota.",
  address: "Tulang Bawang, Lampung",
  email: "bkctulangbawang@example.com",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
  }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Dojo", href: "/dojo" },
  { label: "Pelatih", href: "/pelatih" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Galeri", href: "/galeri" },
  { label: "Jadwal", href: "/jadwal" },
  { label: "Pendaftaran", href: "/pendaftaran" },
  { label: "Kontak", href: "/kontak" }
];

export const dojos: Dojo[] = [
  {
    slug: "menggala",
    name: "Dojo Menggala",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
    address: "GOR Menggala, Tulang Bawang",
    schedule: "Senin, Rabu, Jumat - 16.00 WIB",
    members: 72,
    trainer: "Sensei Andri Wijaya",
    description:
      "Dojo pusat pembinaan atlet usia dini, remaja, dan senior dengan fokus disiplin dasar, kumite, dan kata.",
    achievements: ["Juara umum antar-dojo 2025", "12 medali kejuaraan daerah", "Program atlet pelajar aktif"]
  },
  {
    slug: "unit-2",
    name: "Dojo Unit 2",
    image:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=1200&q=80",
    address: "Gedung Serbaguna Unit 2",
    schedule: "Selasa, Kamis, Sabtu - 16.30 WIB",
    members: 65,
    trainer: "Sensei Rina Kartika",
    description:
      "Dojo aktif dengan pembinaan teknik dasar, kepercayaan diri, dan kesiapan ujian kenaikan tingkat.",
    achievements: ["8 atlet lolos seleksi daerah", "Kelas pemula terstruktur", "Latihan gabungan bulanan"]
  },
  {
    slug: "banjar-agung",
    name: "Dojo Banjar Agung",
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1200&q=80",
    address: "Aula Kecamatan Banjar Agung",
    schedule: "Rabu, Jumat, Minggu - 15.30 WIB",
    members: 58,
    trainer: "Sensei Dedi Pratama",
    description:
      "Dojo keluarga dengan lingkungan latihan aman, rapi, dan konsisten untuk membangun karakter anggota.",
    achievements: ["Program karate anak aktif", "5 medali festival karate", "Kelas teknik kata mingguan"]
  },
  {
    slug: "penawar-tama",
    name: "Dojo Penawar Tama",
    image:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=1200&q=80",
    address: "Balai Kampung Penawar Tama",
    schedule: "Selasa, Jumat - 16.00 WIB",
    members: 44,
    trainer: "Sensei Maya Lestari",
    description:
      "Dojo pembinaan baru yang berkembang cepat dengan fokus fondasi teknik, etika dojo, dan kebugaran.",
    achievements: ["Pembinaan anggota baru", "Kelas sabuk putih intensif", "Partisipasi gashuku cabang"]
  }
];

export const trainers: Trainer[] = [
  {
    name: "Sensei Andri Wijaya",
    rank: "DAN IV",
    experience: "18 tahun pengalaman",
    dojo: "Menggala",
    specialty: "Kumite kompetisi dan fisik atlet",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sensei Rina Kartika",
    rank: "DAN III",
    experience: "14 tahun pengalaman",
    dojo: "Unit 2",
    specialty: "Kata, teknik dasar, dan pembinaan usia dini",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sensei Dedi Pratama",
    rank: "DAN III",
    experience: "12 tahun pengalaman",
    dojo: "Banjar Agung",
    specialty: "Disiplin dojo dan persiapan ujian sabuk",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sensei Maya Lestari",
    rank: "DAN II",
    experience: "9 tahun pengalaman",
    dojo: "Penawar Tama",
    specialty: "Karate pemula dan kelas remaja",
    image:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=900&q=80"
  }
];

export const events: EventItem[] = [
    {
    title: "Ujian Kenaikan Dan",
    date: "20 Mei 2026",
    location: "SMPN 1 PENAWARTAMA",
    category: "Latihan",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sesi latihan terpadu untuk menyamakan standar teknik dan memperkuat kekompakan antar-dojo."
  },
  {
    title: "Latihan Gabungan Cabang",
    date: "18 Mei 2026",
    location: "GOR Menggala",
    category: "Latihan",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sesi latihan terpadu untuk menyamakan standar teknik dan memperkuat kekompakan antar-dojo."
  },
  {
    title: "Ujian Kenaikan Tingkat",
    date: "25 Mei 2026",
    location: "Gedung Serbaguna Unit 2",
    category: "Ujian",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Evaluasi teknik, mental, dan kedisiplinan anggota untuk kenaikan sabuk periode semester ini."
  },
  {
    title: "Kejuaraan BKC Open",
    date: "8 Juni 2026",
    location: "Tulang Bawang",
    category: "Kejuaraan",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ajang prestasi atlet cabang untuk kategori kata dan kumite usia dini, kadet, junior, dan senior."
  },
  {
    title: "Seminar Kepelatihan",
    date: "21 Juni 2026",
    location: "Aula Cabang",
    category: "Seminar",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description:
      "Peningkatan kapasitas pelatih dalam metode pembinaan modern, aman, dan terukur."
  },
  {
    title: "Gashuku dan Penguatan Mental",
    date: "12 Juli 2026",
    location: "Banjar Agung",
    category: "Gashuku",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kegiatan intensif untuk memperkuat fisik, mental, etika, dan kebersamaan anggota BKC."
  }
];

export const gallery: GalleryItem[] = [
  {
    title: "Latihan teknik dasar",
    category: "Latihan",
    image:
      "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Persiapan kumite",
    category: "Kejuaraan",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Ujian sabuk",
    category: "Ujian",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Aksi sosial cabang",
    category: "Sosial",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Latihan fisik atlet",
    category: "Latihan",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Tim kejuaraan",
    category: "Kejuaraan",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80"
  }
];

export const schedules = dojos.map((dojo) => ({
  dojo: dojo.name,
  day: dojo.schedule.split(" - ")[0],
  time: dojo.schedule.split(" - ")[1],
  location: dojo.address,
  trainer: dojo.trainer
}));

export const organizationTimeline = [
  {
    year: "1966",
    title: "BKC Berdiri",
    description:
      "Bandung Karate Club tumbuh sebagai wadah pembinaan karate yang menekankan karakter, keberanian, dan prestasi."
  },
  {
    year: "2012",
    title: "Pembinaan di Tulang Bawang",
    description:
      "Kegiatan latihan mulai berkembang melalui dojo-dojo lokal dengan dukungan pelatih dan tokoh masyarakat."
  },
  {
    year: "2018",
    title: "Penguatan dan Pengembangan Cabang",
    description:
      "Struktur cabang diperkuat untuk menyatukan program latihan, ujian, dan agenda kejuaraan."
  },
  {
    year: "2026",
    title: "Era Digital Organisasi",
    description:
      "Informasi cabang, pendaftaran, galeri, dan kegiatan ditata dalam platform resmi yang modern."
  }
];
