import { SectionHero } from "@/components/section/SectionHero";
import { SectionServices } from "@/components/section/SectionService";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
    </>
  );
}
