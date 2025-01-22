"use client";

import InfiniteCarousel from "../components/InfiniteCarousel";

const images = [
  { src: "/placeholder.svg?height=310&width=450", alt: "Image 1" },
  { src: "/placeholder.svg?height=310&width=450", alt: "Image 2" },
  { src: "/placeholder.svg?height=310&width=450", alt: "Image 3" },
  { src: "/placeholder.svg?height=310&width=450", alt: "Image 4" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <h1 className="fixed inset-0 flex items-center justify-center text-[128px] leading-none font-bold text-black z-20 pointer-events-none">
        Indi Janssen
      </h1>
      <div className="absolute top-12 left-12 z-30">
        <h2 className="text-lg">Designer-Model-Artist</h2>
      </div>
      <InfiniteCarousel images={images} />
    </main>
  );
}
