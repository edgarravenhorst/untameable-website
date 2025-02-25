"use client";
import React from "react";
import { TextBox } from "./text-box";
import { useTranslation } from "react-i18next";
import { Divider } from "@/app/[locale]/decoration/divider";

type Props = {};

export const HowWeHelp = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-center text-xl md:text-[1.75rem] mb-6 not-prose text-white font-extrabold">
        {t("home:howWeCanHelpYou", { defaultValue: "Waar we je bij helpen:" })}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center ">
        <TextBox
          title={t("home:webAndPlatformDevelopment.title", {
            defaultValue: "Web- en platformontwikkeling",
          })}
          text={t("home:webAndPlatformDevelopment.text", {
            defaultValue:
              "We ontwikkelen gebruiksvriendelijke toepassingen die aansluiten op jouw bedrijf.",
          })}
          isBigTitle
        />
        <TextBox
          title={t("home:processOptimization.title", {
            defaultValue: "Procesoptimalisatie",
          })}
          text={t("home:processOptimization.text", {
            defaultValue:
              "We vereenvoudigen workflows en verhogen de productiviteit.",
          })}
          isBigTitle
        />
        <TextBox
          title={t("home:iotAndOptimization.title", {
            defaultValue: "IoT & Automatisering",
          })}
          text={t("home:iotAndOptimization.text", {
            defaultValue:
              "We zorgen voor slimme koppelingen tussen systemen en apparaten, zodat jij sneller en efficiënter kunt werken.",
          })}
          isBigTitle
        />
        <TextBox
          title={t("home:strategicInnovation.title", {
            defaultValue: "Strategische innovatie",
          })}
          text={t("home:strategicInnovation.text", {
            defaultValue:
              "We denken mee over nieuwe ideeën en groeikansen—van visie tot realisatie.",
          })}
          isBigTitle
        />
      </div>
      <Divider orientation="vertical" className={"h-10 mx-auto my-[3.75rem]"} />
    </section>
  );
};
