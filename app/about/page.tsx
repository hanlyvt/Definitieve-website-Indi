"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <main className="min-h-screen bg-white relative p-12">
      {/* Header text */}
      <div className={`mb-24 ${montserrat.className}`}>
        <h2 className="text-base font-normal">Designer - Model - Artist</h2>
      </div>

      {/* About Me section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[128px] leading-none font-bold text-black mb-24">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
      </div>
    </main>
  );
}
