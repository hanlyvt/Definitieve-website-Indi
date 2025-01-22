"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ParallaxImage from "./ParallaxImage";

interface CarouselImage {
  src: string;
  alt: string;
}

export default function InfiniteCarousel({
  images,
}: {
  images: CarouselImage[];
}) {
  const controls = useAnimation();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const totalHeight = images.length * (310 + 32); // 310px for image height, 32px for margin
    setHeight(totalHeight);

    const animateCarousel = async () => {
      await controls.start({
        y: [-totalHeight / 2, 0],
        transition: {
          y: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    };

    animateCarousel();
  }, [images, controls]);

  return (
    <div className="overflow-hidden h-screen relative">
      <motion.div
        animate={controls}
        className="flex flex-col items-center max-w-4xl mx-auto"
        style={{ y: -height / 2 }}
      >
        {[...images, ...images].map((image, index) => (
          <ParallaxImage key={index} {...image} isEven={index % 2 === 0} />
        ))}
      </motion.div>
    </div>
  );
}
