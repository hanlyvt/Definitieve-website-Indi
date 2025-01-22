"use client";

import { Montserrat } from "@next/font/google";
import InfiniteCarousel from "../components/InfiniteCarousel";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const images = [
  { src: "/images/Bloem1.jpg?height=310&width=400", alt: "Image 1" },
  { src: "/images/Flaw1.jpg?height=310&width=250", alt: "Image 2" },
  { src: "/images/Glass1.jpg?height=310&width=4 50", alt: "Image 3" },
  { src: "/images/Glass4.jpg?height=310&width=450", alt: "Image 4" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <h1 className="fixed inset-0 flex items-center justify-center text-[128px] leading-none font-bold text-black z-10 pointer-events-none">
        Indi Janssen
      </h1>
      <div className={`absolute top-12 left-12 z-30 ${montserrat.className}`}>
        <h2 className="text-base font-normal">Designer-Model-Artist</h2>
      </div>
      <div className="relative z-20">
        <InfiniteCarousel images={images} />
      </div>
    </main>
  );
}
