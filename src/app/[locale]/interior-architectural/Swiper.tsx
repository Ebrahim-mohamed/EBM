"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ track current active slide
  const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div className="flex flex-row items-center justify-center gap-4 h-[400px] md:h-[500px]">
      {/* Main Slider */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // ✅ update active thumbnail
        className="w-[70%] h-full rounded-2xl overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src="/ServicesAndSolutionsPage/service1.png"
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        spaceBetween={10}
        slidesPerView={4}
        freeMode={{ enabled: true }}
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[25%] h-full rounded-xl swiper-thumbs"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src="/ServicesAndSolutionsPage/service1.png"
              alt={`Thumbnail ${index}`}
              className={`w-full h-[90px] object-cover cursor-pointer rounded-lg transition 
                ${
                  activeIndex === index
                    ? "opacity-100 border-4 border-blue-500" // ✅ highlight active one
                    : "opacity-70 hover:opacity-100 border-2 border-transparent"
                }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
