"use client";
import React from "react";
import { TextBox } from "./text-box";
import { useTranslation } from "react-i18next";

type Props = {};

export const Services = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="pb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 justify-items-center  ">
      <TextBox
        title={t("home:whatWorks.title", {
          defaultValue: "Wij doen wat werkt",
        })}
        text={t("home:whatWorks.text", {
          defaultValue:
            "We houden het simpel: wat werkt, werkt—zonder opgeblazen marketingtaal.",
        })}
      />
      <TextBox
        title={t("home:weCollaborate.title", {
          defaultValue: "Wij denken mee",
        })}
        text={t("home:weCollaborate.text", {
          defaultValue:
            "We denken strategisch met je mee en helpen je bij de uitvoering.",
        })}
      />
      <TextBox
        title={t("home:weSolve.title", { defaultValue: "Wij ontzorgen" })}
        text={t("home:weSolve.text", {
          defaultValue:
            "We nemen obstakels weg met oplossingen die écht werken.",
        })}
      />
      <TextBox
        title={t("home:weDeliver.title", { defaultValue: "Wij leveren" })}
        text={t("home:weDeliver.text", {
          defaultValue:
            "We zetten ons in om jouw visie waar te maken en écht impact te leveren.",
        })}
      />
    </div>
  );
};
