"use client";

import { useEffect, useState } from "react";

const API = "https://api.ebmksa.com";
const DEFAULT_IMAGE = "/homePage/story.jpg";

type StoryImage = {
  filename: string;
  url: string;
};

export function StoryImageSlider() {
  const [images, setImages] = useState<string[]>([DEFAULT_IMAGE]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API}/story-images-api`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (Array.isArray(data.images) && data.images.length > 0) {
          setImages(data.images.map((img: StoryImage) => `${API}${img.url}`));
          setCurrent(0);
        }
      })
      .catch(() => {
        // keep the default image if the request fails
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-advance every 4 seconds (timer restarts after manual navigation)
  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(id);
  }, [images.length, current]);

  function goPrev() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  function goNext() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  return (
    <div className="relative w-[70%] aspect-[4/3] rounded-[1.5rem] overflow-hidden max-[1300px]:w-[100%] max-[1100px]:w-[130%]">
      {images.map((src, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt="story image"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-[0.75rem] top-1/2 -translate-y-1/2 w-[2.5rem] h-[2.5rem] rounded-full bg-black/50 text-white text-[1.5rem] leading-none flex items-center justify-center hover:bg-black/70 transition"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-[0.75rem] top-1/2 -translate-y-1/2 w-[2.5rem] h-[2.5rem] rounded-full bg-black/50 text-white text-[1.5rem] leading-none flex items-center justify-center hover:bg-black/70 transition"
          >
            ›
          </button>

          <div className="absolute bottom-[0.75rem] left-1/2 -translate-x-1/2 flex gap-[0.5rem]">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`w-[0.6rem] h-[0.6rem] rounded-full transition ${
                  index === current ? "bg-[#A8CF38]" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}