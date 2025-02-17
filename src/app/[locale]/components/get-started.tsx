"use client";
import Image from "next/image";
import React from "react";
import { tw } from "../helper/tw";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Props = {};

export const GetStarted = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section className="w-full max-w-[1041px] mx-auto flex items-center flex-col xl:flex-row gap-24">
      <article className="w-full max-w-[381.5px]  items-center gap-24 justify-center mb-16">
        <Image
          src="/edgar.png"
          alt="Edgar Ravenhorst"
          width={381.52}
          height={381.52}
          className={tw(
            "w-full",
            "max-w-[381.52px]",
            "h-full",
            "max-h-[381.52px]",
            "not-prose",
            "object-cover",
            "mb-16"
          )}
        />

        <div className="pl-4">
          <h3 className="not-prose text-[1.625rem] font-extrabold leading-10 mb-2">
            {t("home:shortIntroduction.title", {
              defaultValue: "Korte introductie",
            })}
          </h3>
          <p className="not-prose text-xl font-semibold leading-8">
            {t("home:shortIntroduction.text", {
              defaultValue:
                "“Mijn naam is Edgar Ravenhorst. Met meer dan 10 jaar ervaring in full-stack webdevelopment werk ik samen met jou en het team om de resultaten te behalen waar je naar streeft.”",
            })}
          </p>
        </div>
      </article>
      <article className="gap-24  ">
        <div className="w-full max-w-[534px] h-full max-h-[381.52px] flex flex-col justify-center items-center mb-16">
          <h2 className="not-prose text-8xl whitespace-nowrap font-extrabold mb-3 text-center">
            {t("home:getStarted.title", { defaultValue: "Aan de slag!" })}
          </h2>
          <p className="not-prose text-[1.625rem] leading-10 text-center">
            {t("home:getStarted.text", {
              defaultValue:
                "Ga met ons aan de slag en ontdek wat we voor jouw organisatie kunnen betekenen.",
            })}
          </p>
        </div>
        <div id="contact-us" className="flex flex-col items-center">
          <h3 className="not-prose text-[1.625rem] font-extrabold leading-10 mb-2">
            {t("home:contactUs.title", { defaultValue: "Neem contact op" })}
          </h3>
          <p className="not-prose text-[1.375rem] font-bold">
            {t("home:contactUs.callUs", { defaultValue: "Bel ons:" })}:{" "}
            <Link href={"tel:+31627311410"} className="text-[--color-primary]">
              +31 627 311 410
            </Link>
          </p>
          <p className="not-prose  text-[1.375rem] font-bold">
            {t("home:contactUs.emailUs", { defaultValue: "Mail ons:" })}{" "}
            <Link
              href={"mailto:info@untameable.io"}
              className="text-[--color-primary]"
            >
              info@untameable.io
            </Link>
          </p>

          <p className="not-prose  text-[1.375rem] font-bold">
            {t("home:contactUs.connectWithUs", {
              defaultValue: "Verbind met ons op social media",
            })}
          </p>

          <div>
            <Link href="https://www.linkedin.com/company/untameable/">
              <FaLinkedin size={31.5} />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
