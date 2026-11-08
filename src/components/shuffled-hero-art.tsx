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
  {
    src: "/assets/arman-city-hill-lane.webp",
    alt: "A painted stone lane leading toward a hillside bell tower",
  },
  {
    src: "/assets/arman-city-dome-stairs.webp",
    alt: "Flower-lined stone steps rising toward a domed hill town",
  },
  {
    src: "/assets/arman-city-fountain-court.webp",
    alt: "A sunlit stone courtyard with a fountain and lemon trees",
  },
  {
    src: "/assets/arman-city-cliff-terrace.webp",
    alt: "A flowering terrace overlooking a blue Mediterranean sea",
  },
  {
    src: "/assets/arman-city-flower-bridges.webp",
    alt: "A flower-lined lane passing beneath stone bridges",
  },
  {
    src: "/assets/arman-city-garden-arcade.webp",
    alt: "A garden walkway beneath stone arches overlooking a hill town",
  },
  {
    src: "/assets/arman-city-cove.webp",
    alt: "A hillside village and stone arch above a blue coastal cove",
  },
  {
    src: "/assets/arman-city-viaduct.webp",
    alt: "A high stone viaduct above a flowering village street",
  },
  {
    src: "/assets/arman-city-flower-stairs.webp",
    alt: "Flowering branches frame stone steps and open archways",
  },
  {
    src: "/assets/arman-city-colonnade.webp",
    alt: "A sunlit colonnade overlooking a coastal hill town",
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
