import { useTranslations } from "next-intl";
import { Header } from "../Header";

import React from "react";
import { ProjectBox } from "./ProjectBox";
const projects = [
  {
    header: "project1",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces AirPollution Control as a core function within our operations in theKingdom of Saudi Arabia.This division is dedicated to providing advanced solutions thatreduce industrial emissions,improve air quality, and ensure compliance with localand international environmental standards. Leveraging cutting-edge technology and industry expertise, our systems are designedto capture and control airborne pollutants efficiently supporting cleaner production processes and healthier communities.",
  },
  {
    header: "project1",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces AirPollution Control as a core function within our operations in theKingdom of Saudi Arabia.This division is dedicated to providing advanced solutions thatreduce industrial emissions,improve air quality, and ensure compliance with localand international environmental standards. Leveraging cutting-edge technology and industry expertise, our systems are designedto capture and control airborne pollutants efficiently supporting cleaner production processes and healthier communities.",
  },
  {
    header: "project1",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces AirPollution Control as a core function within our operations in theKingdom of Saudi Arabia.This division is dedicated to providing advanced solutions thatreduce industrial emissions,improve air quality, and ensure compliance with localand international environmental standards. Leveraging cutting-edge technology and industry expertise, our systems are designedto capture and control airborne pollutants efficiently supporting cleaner production processes and healthier communities.",
  },
  {
    header: "project1",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces AirPollution Control as a core function within our operations in theKingdom of Saudi Arabia.This division is dedicated to providing advanced solutions thatreduce industrial emissions,improve air quality, and ensure compliance with localand international environmental standards. Leveraging cutting-edge technology and industry expertise, our systems are designedto capture and control airborne pollutants efficiently supporting cleaner production processes and healthier communities.",
  },
  {
    header: "project1",
    des: "As part of our commitment to environmental stewardship and sustainable development, EBM Engineering proudly introduces AirPollution Control as a core function within our operations in theKingdom of Saudi Arabia.This division is dedicated to providing advanced solutions thatreduce industrial emissions,improve air quality, and ensure compliance with localand international environmental standards. Leveraging cutting-edge technology and industry expertise, our systems are designedto capture and control airborne pollutants efficiently supporting cleaner production processes and healthier communities.",
  },
];
export function ProjectsSection() {
  const t = useTranslations("projectsPage.projectsSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        isBr
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex flex-col gap-[4rem]">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            des={project.des}
            header={project.header}
            order={index}
          />
        ))}
      </div>
    </div>
  );
}
