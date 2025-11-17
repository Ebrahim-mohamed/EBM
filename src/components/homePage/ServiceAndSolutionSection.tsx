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
    header: "hvac",
    des: "We at EBM Engineering take pride in offering a curated selection of HVAC products featuring the industry’s best brands. Our commitment to excellence means you’ll find top-quality heating, ventilation, electrochemical and air conditioning solutions for your every need.",
    to: "hvac",
    img: "hvac",
  },
  {
    header: "fire",
    des: "EBM Engineering: Your trusted specialist for comprehensive Fire Protection and Safety solutions. We provide top-tier products and full-service support to safeguard your building and its occupants.",
    to: "fire-fighting",
    img: "fire",
  },
  {
    header: "air",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces Air Pollution Control as a core function within our operations in the Kingdom of Saudi Arabia.",
    to: "air-population",
    img: "air",
  },
  {
    header: "spe",
    des: "EBM Engineering provides high-efficiency misting systems for cooling, humidification, and dust suppression across industrial, commercial, and outdoor spaces.",
    to: "special-projects",
    img: "spe",
  },
];

export function ServiceAndSolutionSection() {
  const t = useTranslations("homePage.servicesAndSolutions");
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
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mb-[3rem]"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center" // ensure centering on narrow screens
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
