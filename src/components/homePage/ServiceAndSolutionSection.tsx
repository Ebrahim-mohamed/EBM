"use client";
import { useTranslations } from "next-intl";
import { Header } from "../Header";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ServiceAndSolutionSectionBox } from "./ServiceAndSolutionSectionBox";
import { LinkButton } from "../LinkButton";

const services = [
  {
    header: "HVAC Solution",
    des: "We at EBM Engineering take pride in offering a curated selection of HVAC products featuring the industry’s best brands. Our commitment to excellence means you’ll find top-quality heating, ventilation, electrochemical and air conditioning solutions for your every need.",
    to: "hvac",
    img: "hvac",
  },
  {
    header: "Fire Fighting",
    des: "EBM Engineering: Your trusted specialist for comprehensive Fire Protection and Safety solutions. We provide top-tier products and full-service support to safeguard your building and its occupants.",
    to: "fire-fighting",
    img: "fire",
  },
  {
    header: "Air population",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces Air Pollution Control as a core function within our operations in the Kingdom of Saudi Arabia.",
    to: "air-population",
    img: "air",
  },
  {
    header: "Special Projects",
    des: "EBM Engineering provides high-efficiency misting systems for cooling, humidification, and dust suppression across industrial, commercial, and outdoor spaces.",
    to: "special-projects",
    img: "spe",
  },
];

export function ServiceAndSolutionSection() {
  const t = useTranslations("homePage.servicesAndSolutions");

  // ✅ Correctly typed ref
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        pra={t("des")}
      />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="mb-[3rem]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <ServiceAndSolutionSectionBox
              header={service.header}
              pra={service.des}
              to={service.to}
              img={service.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center">
        <LinkButton name={t("button")} to="service-solution" />
      </div>
    </div>
  );
}
