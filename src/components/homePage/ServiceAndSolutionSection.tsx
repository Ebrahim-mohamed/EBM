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
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
  {
    header: "HVAC Solution",
    des: "Ensuring the safety and comfort of new cultural, entertainment, and residential landmarks, enhancing quality of life for all citizens and residents.",
    img: "serviceDemo",
  },
];

export function ServiceAndSolutionSection() {
  const t = useTranslations("homePage.servicesAndSolutions");

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
        // pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="mb-[3rem]"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceAndSolutionSectionBox
              header={service.header}
              pra={service.des}
              img={service.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <LinkButton name={t("button")} to="services-solutions" />
      </div>
    </div>
  );
}
