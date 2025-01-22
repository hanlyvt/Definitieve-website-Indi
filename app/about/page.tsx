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
        <h1 className="text-[96px] leading-none font-bold text-black mb-24 pl-8">
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

        {/* Essence Section */}
        <div className="mb-24 mt-8">
          <div className="relative w-8/12 aspect-[30/10] mb-16">
            <Image
              src="/images/Flaw2.jpg?height=900&width=1900"
              alt="Bridge at sunset"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-8">
              <p className="text-sm">
                Na een opleiding aan een vooraanstaande designacademie werd een
                eigen studio opgericht, waar wordt samengewerkt met
                ambachtslieden uit verschillende delen van de wereld. De
                ontwerpen streven naar een sfeer van rust en harmonie, waarbij
                natuurlijke esthetiek en duurzaamheid centraal staan. De
                creaties zijn te vinden in galerieën, luxe interieurs en
                bekroonde architectonische projecten wereldwijd.
              </p>
              <Link
                href="#"
                className="inline-block text-base font-bold hover:opacity-70"
              >
                Quote of een zin
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Essence
                <br />
                of
                <br />
                elegance.
              </h2>
            </div>
          </div>
        </div>
        {/* Experiences Section */}
        <div className="bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Experiences
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Logo 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 w-[100px] h-[100px] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="20" y="20" width="60" height="60" fill="black" />
                  </svg>
                </div>
                <p className="text-sm">@Models</p>
                <p className="text-sm text-gray-400">2022-2024</p>
              </div>

              {/* Logo 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 w-[100px] h-[100px] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="30" fill="black" />
                  </svg>
                </div>
                <p className="text-sm">@MOOI</p>
                <p className="text-sm text-gray-400">2022-2024</p>
              </div>

              {/* Logo 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 w-[100px] h-[100px] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,20 80,80 20,80" fill="black" />
                  </svg>
                </div>
                <p className="text-sm">@ProjectName</p>
                <p className="text-sm text-gray-400">2022-2024</p>
              </div>

              {/* Logo 4 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 w-[100px] h-[100px] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect
                      x="30"
                      y="30"
                      width="40"
                      height="40"
                      fill="black"
                      transform="rotate(45, 50, 50)"
                    />
                  </svg>
                </div>
                <p className="text-sm">@ProjectName</p>
                <p className="text-sm text-gray-400">2022-2024</p>
              </div>

              {/* Logo 5 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 w-[100px] h-[100px] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="20" fill="black" />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-sm">@ProjectName</p>
                <p className="text-sm text-gray-400">2022-2024</p>
              </div>

              {/* Logo 6 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 w-[100px] h-[100px] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="30" y="45" width="40" height="10" fill="black" />
                    <rect x="45" y="30" width="10" height="40" fill="black" />
                  </svg>
                </div>
                <p className="text-sm">@ProjectName</p>
                <p className="text-sm text-gray-400">2022-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
