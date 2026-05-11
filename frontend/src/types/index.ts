export type Dojo = {
  slug: string;
  name: string;
  image: string;
  address: string;
  schedule: string;
  members: number;
  trainer: string;
  description: string;
  achievements: string[];
};

export type Trainer = {
  name: string;
  rank: string;
  experience: string;
  dojo: string;
  specialty: string;
  image: string;
};

export type EventItem = {
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  category: "Latihan" | "Kejuaraan" | "Ujian" | "Sosial";
  image: string;
};
