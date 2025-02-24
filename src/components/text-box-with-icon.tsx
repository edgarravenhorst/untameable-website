import React from "react";
import { FaChartLine, FaRegLightbulb } from "react-icons/fa";
import { FaArrowsToCircle } from "react-icons/fa6";
import {
  faChartLine,
  faLightbulb,
  faArrowsToDot,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TextBoxWithIconProps = {
  iconName: "growth" | "idea" | "balance";
  subtitle: string;
  title: string;
  text: string;
};

export const TextBoxWithIcon: React.FC<TextBoxWithIconProps> = ({
  iconName,
  subtitle,
  text,
  title,
}) => {
  // const icons = {
  //   growth: <FaChartLine className="text-4xl md:text-6xl" />,
  //   idea: <FaRegLightbulb className="text-4xl md:text-6xl" />,
  //   balance: <FaArrowsToCircle className="text-4xl md:text-6xl" />,
  // };
  const icons = {
    growth: (
      <FontAwesomeIcon icon={faChartLine} className="text-4xl md:text-6xl" />
    ),
    idea: (
      <FontAwesomeIcon icon={faLightbulb} className="text-4xl md:text-6xl" />
    ),
    balance: (
      <FontAwesomeIcon icon={faArrowsToDot} className="text-4xl md:text-6xl" />
    ),
  };
  return (
    <article
      className="w-full max-w-[24.875rem]   border
        border-[#111B2B] p-6 max-h-64"
      style={{ backgroundColor: "rgba(46, 70, 111, 0.1)" }}
    >
      <div className="flex gap-[1.125rem] items-end mb-5 ">
        <span>{icons[iconName]}</span>

        <div>
          <p className="not-prose text-white text-xs md:text-sm">{subtitle}</p>
          <h2 className="not-prose text-lg md:text-[22px]   text-[--color-primary]">
            {title}
          </h2>
        </div>
      </div>

      <p className="not-prose text-base md:text-xl font-normal">{text}</p>
    </article>
  );
};
