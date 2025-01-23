import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

const projects = [
  {
    id: 1,
    title: "FLAWED PERFECTION",
    description:
      "In een wereld waarin perfectie vaak wordt nagestreefd, brengt Flawed Perfection een ode aan de schoonheid van imperfectie. Dit project onderzoekt de kracht van rauwe en ongepolijste vormen, waarin fouten geen beperkingen zijn, maar juist de kern van authenticiteit. De minimalistische ontwerpen, gecombineerd met contrasterende typografie en subtiele nuances, dagen de kijker uit om anders naar imperfecties te kijken – niet als fouten, maar als unieke eigenschappen die verhalen vertellen.",
    additionalInfo:
      'De term "FLAW" staat centraal in dit project. Het vertegenwoordigt niet alleen het idee van gebreken, maar ook van eerlijkheid en kwetsbaarheid. Door te spelen met texturen, schaduwen en typografie, nodigt Flawed Perfection je uit om voorbij de oppervlakkige lagen te kijken en het onverwachte te omarmen.',
    goal: "Met Flawed Perfection willen we een dialoog openen over de betekenis van schoonheid en de rol die imperfectie daarin speelt. Het project is een uitnodiging om anders te denken, te voelen en te creëren – en daarmee te vieren wat ons uniek maakt.",
    collection:
      "Ontdek de volledige collectie en laat je inspireren door een visuele reis die imperfectie transformeert tot iets moois. Elk ontwerp is een statement en een verhaal op zich.",
    image1: "/images/Flaw1.jpg",
    image2: "/images/Flaw2.jpg",
  },
  {
    id: 2,
    title: "Floral Framework",
    description:
      "Floral Framework is een verkenning van de delicate balans tussen natuurlijke vormen en industriële structuren. Het project combineert organische elementen, zoals bloemen en planten, met geometrische metalen frames, die als ondersteuning en contrast dienen. Deze combinatie symboliseert de relatie tussen natuur en technologie, kwetsbaarheid en kracht.",
    additionalInfo:
      "De keuze voor zachte bloemen in combinatie met het koele, strakke frame is geïnspireerd door de voortdurende spanning tussen mens en natuur. Het frame vertegenwoordigt de menselijke behoefte om te structureren en te ordenen, terwijl de bloemen het ongecontroleerde, organische en vrije aspect van de natuur belichamen.",
    goal: "Floral Framework nodigt kijkers uit om na te denken over hoe natuurlijke schoonheid kan worden bewaard, beschermd en geherinterpreteerd in een wereld die steeds meer wordt beïnvloed door technologie. Het project benadrukt de kracht van samenwerking tussen het natuurlijke en het kunstmatige, en hoe deze elkaar kunnen versterken.",
    collection:
      "Ontdek de volledige collectie en laat je inspireren door een visuele reis die imperfectie transformeert tot iets moois. Elk ontwerp is een statement en een verhaal op zich.",
    image1: "/images/Bloem1.jpg",
    image2: "/images/Bloem2.jpg",
    image3: "/images/Bloem3.jpg",
  },
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="p-12">
        {/* Header text */}
        <div className={`mb-8 ${montserrat.className}`}>
          <h2 className="text-base font-normal">Designer-Model-Artist</h2>
        </div>

        {/* Project title */}
        <div className="mb-24">
          <h1 className="text-[96px] leading-none font-bold text-black mb-4">
            {project.title}
          </h1>
          <p className="text-1xl text-gray-400">Project #{project.id}</p>
        </div>

        {/* Project description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6 max-w-xl">
            <p className="text-base">{project.description}</p>
            <p className="text-base">{project.additionalInfo}</p>
          </div>
          <div className="relative aspect-[1/1]">
            <Image
              src={project.image1 || "/placeholder.svg"}
              alt={`${project.title} project image`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Goal section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-lg font-bold mb-6">Doel:</h2>
            <p className="text-base">{project.goal}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Bekijk de collectie:</h2>
            <p className="text-base">{project.collection}</p>
          </div>
        </div>

        {/* Full width image */}
        <div className="relative w-full aspect-video mb-24">
          <Image
            src={project.image2 || "/placeholder.svg"}
            alt={`${project.title} collection image`}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full aspect-video mb-24">
          <Image
            src={project.image3 || "/placeholder.svg"}
            alt={`${project.title} collection image`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
