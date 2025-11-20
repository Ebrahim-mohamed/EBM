"use client";
import { useLocale, useTranslations } from "next-intl";
import { Header } from "../Header";

import React, { useEffect, useState } from "react";
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
type ProjectType = {
  _id: string;
  image: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
};
export function ProjectsSection() {
  const t = useTranslations("projectsPage.projectsSection");
  const locale = useLocale();
  const [contactData, setContactData] = useState<ProjectType[]>();
  useEffect(() => {
    fetch("https://api.ebmksa.com/projects")
      .then((data) => data.json())
      .then((finalData) => setContactData(finalData));
  }, []);
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        isBr
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />

      {contactData === undefined ? (
        <div className="text-center text-white">Loading...</div>
      ) : contactData === null || contactData.length === 0 ? (
        <p className="text-center font-bold text-[1.2rem] m-[1.5rem] text-[#A8CF38]">
          there is no projects yet
        </p>
      ) : (
        <div className="flex flex-col gap-[4rem]">
          {contactData.map((project, index) => (
            <ProjectBox
              key={project._id}
              image={project.image}
              des={
                locale === "en"
                  ? project.description.en
                  : project.description.ar
              }
              header={locale === "en" ? project.title.en : project.title.ar}
              order={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
