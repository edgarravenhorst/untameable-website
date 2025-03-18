"use client";
import React from "react";
import { TextBoxWithIcon } from "./text-box-with-icon";
import { useTranslation } from "react-i18next";
import { Divider } from "@/app/[locale]/decoration/divider";

type Props = {};

export const WeConnect = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-center text-xl md:text-[1.75rem] mb-6 not-prose text-white font-extrabold">
        {t("home:weConnectWith", { defaultValue: "Wij verbinden met:" })}
      </h2>
      <div className=" grid xl:grid-cols-3 gap-6 justify-items-center">
        <TextBoxWithIcon
          iconName="growth"
          subtitle={t("home:growthAndEfficiency.subtitle", {
            defaultValue: "Bedrijven gericht op",
          })}
          title={t("home:growthAndEfficiency.title", {
            defaultValue: "Bedrijven gericht op",
          })}
          text={t("home:growthAndEfficiency.text", {
            defaultValue:
              "Van start-ups tot MKB en daarbuiten—als je wilt groeien en efficiënter wilt werken.",
          })}
        />
        <TextBoxWithIcon
          iconName="idea"
          subtitle={t("home:innovativeIdeas.subtitle", {
            defaultValue: "Organisaties met",
          })}
          title={t("home:innovativeIdeas.title", {
            defaultValue: "Innovatieve ideeën",
          })}
          text={t("home:innovativeIdeas.text", {
            defaultValue:
              "Voor wie lef heeft en openstaat voor nieuwe inzichten om voorop te blijven lopen.",
          })}
        />

        <TextBoxWithIcon
          iconName="balance"
          subtitle={t("home:focusAndBalance.subtitle", {
            defaultValue: "Teams op zoek naar",
          })}
          title={t("home:focusAndBalance.title", {
            defaultValue: "Focus & Balans",
          })}
          text={t("home:focusAndBalance.text", {
            defaultValue:
              "Voor wie verandering en vernieuwing nastreeft, of het nu gaat om automatisering, digitalisering of verduurzaming.",
          })}
        />
      </div>

      <Divider
        orientation="vertical"
        className={"h-10 mx-auto mt-[3.75rem] mb-[7.5rem]"}
      />
    </section>
  );
};
