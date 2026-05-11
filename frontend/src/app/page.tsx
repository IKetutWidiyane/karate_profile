import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTASection } from "@/components/sections/CTASection";
import { DojoPreview } from "@/components/sections/DojoPreview";
import { EventPreview } from "@/components/sections/EventPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrainerPreview } from "@/components/sections/TrainerPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <DojoPreview />
      <TrainerPreview />
      <EventPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
