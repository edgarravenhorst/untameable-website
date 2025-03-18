import React from "react";
import { ButtonLink } from "./button-link";
import { useTranslation } from "react-i18next";

type Props = {};
// flex flex-wrap  justify-end md:justify-center xl:flex-col gap-5 xl:justify-end  h-full xl:pb-10

export const ButtonLinks = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="h-full  pb-10">
      <div className="h-full flex flex-col justify-end  gap-5">
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
          className={" -mr-5 ml-5"}
        />
        <ButtonLink
          url="#contact-us"
          text={t("home:connectWithUs", {
            defaultValue: "Verbind met ons",
          })}
        />
      </div>
    </div>
  );
};
