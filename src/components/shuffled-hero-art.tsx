"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const artwork = [
  {
    src: "/assets/arman-city.webp",
    alt: "A painted city with gardens and connecting paths",
  },
  {
    src: "/assets/arman-city-garden.webp",
    alt: "A painted garden city with stone arches and flowering trees",
  },
  {
    src: "/assets/arman-city-coast.webp",
    alt: "A painted coastal town with stone arches and flowering trees",
  },
];

export function ShuffledHeroArt() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    let previous = -1;

    try {
      const stored = sessionStorage.getItem("arman-home-artwork");
      previous = stored === null ? -1 : Number(stored);
    } catch {
      // The artwork still rotates when browser storage is unavailable.
    }

    const choices = artwork.map((_, index) => index).filter((index) => index !== previous);
    const next = choices[Math.floor(Math.random() * choices.length)];

    try {
      sessionStorage.setItem("arman-home-artwork", String(next));
    } catch {
      // Browser storage is optional for rotation.
    }

    setSelected(next);
  }, []);

  const image = selected === null ? null : artwork[selected];

  return (
    <figure className="hero-art">
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 760px) 72vw, (max-width: 960px) 360px, 470px"
        />
      )}
      <noscript>
        <img
          src={artwork[0].src}
          alt={artwork[0].alt}
          width={768}
          height={1152}
        />
      </noscript>
    </figure>
  );
}
