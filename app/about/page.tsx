"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <main className="min-h-screen bg-white relative py-12">
      {/* Header text */}
      <div className={`mb-24 ${montserrat.className}`}>
        <h2 className="pl-8 text-sm font-normal">Designer - Model - Artist</h2>
      </div>

      {/* About Me section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[128px] leading-none font-bold text-black mb-24 pl-8">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16 px-8">
          <div className="relative h-auto w-full">
            <Image
              src="/images/Glass4.jpg?height=600&width=400"
              alt="About Me"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-sm">
              <p>
                De designer staat bekend om een unieke benadering van interieur
                en productontwerp.
              </p>
              <p>
                Door een mengsel van natuurlijke materialen, subtiele kleuren en
                verfijnde details ontstaan tijdloze creaties die zowel elegant
                als functioneel zijn.
              </p>
              <p>
                Het werk kenmerkt zich door minimalistische vormen, waarbij elk
                detail zorgvuldig is overwogen en perfect in balans staat met de
                rest van het ontwerp.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-block text-base font-bold hover:opacity-70"
            >
              Zie meer projecten
            </Link>
          </div>
        </div>

        {/* Simplicity Section */}
        <div className="p-12 mx-8" style={{ backgroundColor: "#878787" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="relative aspect-square w-full max-w-md">
              <Image
                src="/images/Bloem1.jpg?height=400&width=400"
                alt="Simplicity perfected"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-bold">
                Simplicity
                <br />
                perfected.
              </h2>
              <p className="text-sm">
                Met oog voor detail en een innovatieve visie worden grenzen
                verlegd in de wereld van design. Het werk wordt geprezen om zijn
                genieuze eenvoud en de manier waarop het mensen raakt.
              </p>
              <Link href="#" className="text-base hover:opacity-70 font-bold">
                Quote of een zin
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 relative w-full h-screen">
          <Image
            src="/images/Glass1.jpg?height=1080&width=1920"
            alt="Full screen image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
