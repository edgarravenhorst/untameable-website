import React from "react";
import { ButtonLink } from "./button-link";
import { useTranslation } from "react-i18next";

type Props = {};
// flex flex-wrap  justify-end md:justify-center xl:flex-col gap-5 xl:justify-end  h-full xl:pb-10

export const ButtonLinks = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="h-full">
      {/* for 1280px and above screens.... an screens 639px and below */}
      <div className="flex sm:hidden xl:flex  flex-col gap-3 xl:gap-5 justify-end  h-full pb-10 ">
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
          className={"ml-5 min-w-full"}
        />
        <ButtonLink
          url="#contact-us"
          text={t("home:connectWithUs", {
            defaultValue: "Verbind met ons",
          })}
        />
      </div>

      {/* for screns between 640px amd 1279px  */}
      <div className="hidden sm:flex xl:hidden justify-center   flex-row gap-4 items-center mt-3">
        <div className="flex flex-col lg:flex-row gap-5">
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
          />
        </div>
        <div>
          <ButtonLink
            url="#contact-us"
            text={t("home:connectWithUs", {
              defaultValue: "Verbind met ons",
            })}
          />
        </div>
      </div>
    </div>
  );
};
