"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Header text */}
      <div className={`absolute top-12 left-12 z-30 ${montserrat.className}`}>
        <h2 className="text-base font-normal">Designer - Model - Artist</h2>
      </div>

      {/* About Me section */}
      <div className="relative h-screen flex items-center justify-center">
        <h1 className="absolute text-[128px] leading-none font-bold text-black z-20">
          About Me
        </h1>
        <div className="absolute top-0 right-0 w-1/2 h-screen z-10">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="About Me"
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
    </main>
  );
}
