import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <div className="mb-4">
        <h2 className="text-lg">Designer-Model-Artist</h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Glass spheres"
            width={600}
            height={400}
            className="w-full"
          />
          <p className="text-lg">FLAWED PERFECTION</p>
        </div>

        <div className="relative">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Floral arrangement"
            width={600}
            height={400}
            className="w-full mt-auto"
          />
        </div>
      </div>

      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[128px] leading-none font-bold whitespace-nowrap">
        Indi Janssen
      </h1>
    </main>
  )
}

