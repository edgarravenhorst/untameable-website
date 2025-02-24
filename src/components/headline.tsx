"use client";
import React from "react";
import { tw } from "../app/[locale]/helper/tw";
import { ButtonLink } from "./button-link";
import { TextBox } from "./text-box";
import { Divider } from "../app/[locale]/decoration/divider";
import { useTranslation } from "react-i18next";
import { ButtonLinks } from "./button-links";

type Props = {};

export const Headline = (props: Props) => {
  const { t } = useTranslation();

  return (
    <section
      className={tw(
        "max-w-lg",
        "max-w-[500px]",
        "md:max-w-[600px]",
        "lg:max-w-[800px]",
        "xl:max-w-[1251px]",
        "flex",
        "items-center",
        "min-h-[calc(100svh-240px)]",
        "pb-8"
      )}
    >
      {/* mt-20 sm:mt-32 lg:mt-40 xl:mt-52  */}
      <div className="flex flex-col xl:flex-row  gap-14">
        <div>
          <h1
            className={tw(
              "not-prose",
              "text-white",
              "flex",
              "flex-col",
              "whitespace-nowrap",
              "text-[10vw]",
              "sm:text-6xl",
              "md:text-7xl",
              "lg:text-8xl",
              "xl:text-9xl",
              "!leading-none",
              "font-extrabold",
              "justify-center",
              "w-[100%]",
              "mx-auto"
            )}
          >
            <span className="block">
              {t("home:title.firstPart", { defaultValue: "Voor wie écht" })}
            </span>
            <span className="block">
              {t("home:title.secondPart", { defaultValue: "vooruit wil." })}
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-[1.625rem]  max-w-[921px] md:leading-10  not-prose py-5 xl:py-10">
            {t("home:subtitle", {
              defaultValue:
                "Wij werken aan projecten die het verschil maken, met oplossingen die helder, efficiënt en doelgericht zijn. We nemen obstakels weg en bieden oplossingen die werken, zodat jij je kunt richten op wat er écht toe doet.",
            })}
          </p>
        </div>
        <div>
          <ButtonLinks />
        </div>
      </div>
    </section>
  );
};
