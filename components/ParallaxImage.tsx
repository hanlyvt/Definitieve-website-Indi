"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  isEven: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  isEven,
}: ParallaxImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`parallax-item mb-8 w-full ${
        isEven ? "text-right" : "text-left"
      }`}
    >
      <Link
        href="/projects"
        className={`image-container inline-block ${
          isEven ? "ml-auto" : "mr-auto"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={350}
          height={210}
          className="rounded-lg shadow-xl"
          priority
        />
      </Link>
    </motion.div>
  );
}
