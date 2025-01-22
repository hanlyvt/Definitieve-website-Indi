import Image from "next/image"

export default function Projects() {
  return (
    <main className="min-h-screen p-12">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="grid grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="space-y-4">
            <Image
              src={`/placeholder.svg?height=400&width=600`}
              alt={`Project ${item}`}
              width={600}
              height={400}
              className="w-full"
            />
            <h2 className="text-xl font-bold">Project {item}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </main>
  )
}

