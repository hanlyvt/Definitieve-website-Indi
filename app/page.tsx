"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Glass spheres",
      caption: "FLAWED PERFECTION",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Floral arrangement",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Project 3",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Project 4",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="h-screen overflow-hidden relative">
      {/* Fixed background text */}
      <h1 className="fixed inset-0 flex items-center justify-center text-[128px] leading-none font-bold text-black z-20 pointer-events-none">
        Indi Janssen
      </h1>

      {/* Title */}
      <div className="absolute top-12 left-12 z-30">
        <h2 className="text-lg">Designer-Model-Artist</h2>
      </div>

      {/* Image Carousel */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                width={800}
                height={600}
                className="w-[800px] h-[600px] object-cover"
                priority
              />
              {images[currentIndex].caption && (
                <p className="text-lg mt-2">{images[currentIndex].caption}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
