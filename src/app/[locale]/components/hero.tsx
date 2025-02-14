"use client";
import React from "react";
import { tw } from "../helper/tw";
import { ButtonLink } from "./button-link";
import { TextBox } from "./text-box";
import { Divider } from "../decoration/divider";
import { useTranslation } from "react-i18next";

type Props = {};

export const Hero = (props: Props) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className={tw("xl:mt-52", "flex")}>
        <div className="max-w-[1250px]  mx-auto">
          <h1
            className={tw(
              "not-prose",
              "text-white",
              "whitespace-nowrap",
              "text-[10vw]",
              "sm:text-6xl",
              "md:text-7xl",
              "lg:text-8xl",
              "xl:text-[120px]",
              "!leading-none",
              "font-extrabold",
              "max-w-[1250px]"
            )}
          >
            <span className="block">
              {t("home:title.firstPart", { defaultValue: "Voor wie écht" })}
            </span>
            <span className="block">
              {t("home:title.secondPart", { defaultValue: "vooruit wil." })}
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-[1.625rem]  max-w-[921px] md:leading-10  not-prose py-10">
            {t("home:subtitle", {
              defaultValue:
                "Wij werken aan projecten die het verschil maken, met oplossingen die helder, efficiënt en doelgericht zijn. We nemen obstakels weg en bieden oplossingen die werken, zodat jij je kunt richten op wat er écht toe doet.",
            })}
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5 justify-end  h-full pb-10 ">
            <ButtonLink
              url="/mindset"
              text={t("home:discoverOurMindset", {
                defaultValue: "Ontdek onze mindset",
              })}
            />
            <ButtonLink
              url=""
              text={t("home:readExampleCases", {
                defaultValue: "Lees voorbeeld cases",
              })}
              spaceRight
            />
            <ButtonLink
              url="#contact-us"
              text={t("home:connectWithUs", {
                defaultValue: "Verbind met ons",
              })}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-56 flex-wrap">
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

      <Divider orientation="vertical" className={"h-10 mx-auto my-[3.75rem]"} />
    </section>
  );
};
