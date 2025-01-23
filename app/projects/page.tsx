"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

type Project = {
  id: number;
  image: string;
  category: "design" | "art" | "fashion";
  alt: string;
  title: string;
};

const projects: Project[] = [
  {
    id: 2,
    image: "images/Bloem2.jpg",
    category: "design",
    alt: "Design project with typography",
    title: "Floral Framework",
  },
  {
    id: 1,
    image: "images/Flaw2.jpg",
    category: "art",
    alt: "Floral arrangement in vase",
    title: "FLAWED PERFECTION",
  },
  {
    id: 3,
    image: "images/Bloem1.jpg",
    category: "design",
    alt: "Reflective spheres installation",
    title: "Floral Framework",
  },
  {
    id: 4,
    image: "images/Bloem5.jpg",
    category: "design",
    alt: "Close-up of reflective sphere",
    title: "Floral Framework",
  },
  {
    id: 5,
    image: "images/Flaw1.jpg",
    category: "art",
    alt: "Art installation on wall",
    title: "FLAWED PERFECTION",
  },
  {
    id: 6,
    image: "images/Glass4.jpg",
    category: "art",
    alt: "Floral arrangement with pink flowers",
    title: "Lens of Perception",
  },
  {
    id: 7,
    image: "images/Bloem3.jpg",
    category: "fashion",
    alt: "Fashion project display",
    title: "Floral Framework",
  },
  {
    id: 8,
    image: "images/Bloem6.jpg",
    category: "design",
    alt: "Spherical installation view",
    title: "Floral Framework",
  },
  {
    id: 9,
    image: "images/Glass1.jpg",
    category: "art",
    alt: "Modern floral arrangement",
    title: "Lens of Perception",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "design" | "art" | "fashion">(
    "all"
  );

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <main className="min-h-screen bg-white">
      <div className="p-12">
        {/* Header text */}
        <div className={`mb-8 ${montserrat.className}`}>
          <h2 className="text-base font-normal">Designer-Model-Artist</h2>
        </div>

        {/* Projects heading */}
        <h1 className="text-[128px] leading-none font-bold text-black mb-12">
          Projects
        </h1>

        {/* Filter buttons */}
        <div className="flex gap-4 mb-12">
          {["all", "design", "art", "fashion"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-6 py-2 text-sm ${
                filter === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="block group relative aspect-square overflow-hidden bg-gray-100"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">Project #{project.id}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gray-50 p-12 rounded-lg mb-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Let's create something amazing
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to bring your vision to life? Get in touch and let's start a
              conversation about your next project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-black/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
