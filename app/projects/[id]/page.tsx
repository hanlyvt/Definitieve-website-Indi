import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function ProjectDetail() {
  return (
    <main className="min-h-screen bg-white">
      <div className="p-12">
        {/* Header text */}
        <div className={`mb-8 ${montserrat.className}`}>
          <h2 className="text-base font-normal">Designer-Model-Artist</h2>
        </div>

        {/* Project title */}
        <div className="mb-24">
          <h1 className="text-[128px] leading-none font-bold text-black mb-4">
            FLAWED PERFECTION
          </h1>
          <p className="text-2xl text-gray-400">Project #1</p>
        </div>

        {/* Project description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6 max-w-xl">
            <p className="text-lg">
              In een wereld waarin perfectie vaak wordt nagestreefd, brengt
              Flawed Perfection een ode aan de schoonheid van imperfectie. Dit
              project onderzoekt de kracht van rauwe en ongepolijste vormen,
              waarin fouten geen beperkingen zijn, maar juist de kern van
              authenticiteit. De minimalistische ontwerpen, gecombineerd met
              contrasterende typografie en subtiele nuances, dagen de kijker uit
              om anders naar imperfecties te kijken – niet als fouten, maar als
              unieke eigenschappen die verhalen vertellen.
            </p>
            <p className="text-lg">
              De term "FLAW" staat centraal in dit project. Het vertegenwoordigt
              niet alleen het idee van gebreken, maar ook van eerlijkheid en
              kwetsbaarheid. Door te spelen met texturen, schaduwen en
              typografie, nodigt Flawed Perfection je uit om voorbij de
              oppervlakkige lagen te kijken en het onverwachte te omarmen.
            </p>
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VIp2M7FohJjCZlArF6kFbLB4GA2glx.png"
              alt="Framed artwork from Flawed Perfection project"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Goal section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-6">Doel:</h2>
            <p className="text-lg">
              Met Flawed Perfection willen we een dialoog openen over de
              betekenis van schoonheid en de rol die imperfectie daarin speelt.
              Het project is een uitnodiging om anders te denken, te voelen en
              te creëren – en daarmee te vieren wat ons uniek maakt.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Bekijk de collectie:</h2>
            <p className="text-lg">
              Ontdek de volledige collectie en laat je inspireren door een
              visuele reis die imperfectie transformeert tot iets moois. Elk
              ontwerp is een statement en een verhaal op zich.
            </p>
          </div>
        </div>

        {/* Full width image */}
        <div className="relative w-full aspect-video mb-24">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VIp2M7FohJjCZlArF6kFbLB4GA2glx.png"
            alt="Collection of FLAW typography prints"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
