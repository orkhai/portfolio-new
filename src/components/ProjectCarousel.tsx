"use client";

import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ProjectCarousel = ({
  images,
  link,
}: {
  images: string[];
  link: string;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="relative w-full max-w-3xl"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-4 flex">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="min-w-0 shrink-0 grow-0 basis-full pl-4"
          >
            <a
              className="relative block aspect-square cursor-pointer overflow-hidden rounded-lg md:aspect-4/3"
              href={link}
              target="_blank"
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                className="object-contain opacity-100 transition-opacity duration-1000"
                priority={index === 0}
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="m-4 flex items-center justify-between">
        <CarouselPrevious className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />

        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                index === current
                  ? "bg-primary"
                  : "hover:bg-muted-foreground bg-gray-500"
              }`}
            />
          ))}
        </div>

        <CarouselNext className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
