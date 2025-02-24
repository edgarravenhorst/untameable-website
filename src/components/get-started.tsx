"use client";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { tw } from "@/helper/tw";

type Props = {};

export const GetStarted = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col xl:flex-row items-center justify-center gap-20">
      <article className="w-full max-w-96 ">
        <Image
          src="/edgar.png"
          alt="Edgar Ravenhorst"
          width={384}
          height={384}
          className={tw(
            "w-full",
            "max-w-96",
            "not-prose",
            "object-cover",
            "mb-14"
          )}
        />

        <div className="text-center xl:text-left">
          <h3 className="font-extrabold text-lg md:text-2xl">
            {t("home:shortIntroduction.title", {
              defaultValue: "Korte introductie",
            })}
          </h3>
          <p className="text-base md:text-xl ">
            {t("home:shortIntroduction.text", {
              defaultValue:
                "“Mijn naam is Edgar Ravenhorst. Met meer dan 10 jaar ervaring in full-stack webdevelopment werk ik samen met jou en het team om de resultaten te behalen waar je naar streeft.”",
            })}
          </p>
        </div>
      </article>
      <article className=" w-full max-w-[554px] ">
        <div className="xl:h-[384px] mb-14  text-center xl:text-left flex flex-col justify-center">
          <h2 className="not-prose font-extrabold whitespace-nowrap text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-3 md:mb-6 ">
            {t("home:getStarted.title", { defaultValue: "Aan de slag!" })}
          </h2>
          <p className="not-prose w-full ">
            {t("home:getStarted.text", {
              defaultValue:
                "Ga met ons aan de slag en ontdek wat we voor jouw organisatie kunnen betekenen.",
            })}
          </p>
        </div>
        <div id="contact-us" className="text-center xl:text-left">
          <h3 className="font-extrabold text-lg md:text-2xl ">
            {t("home:contactUs.title", { defaultValue: "Neem contact op" })}
          </h3>
          <p className="not-prose font-bold text-base md:text-xl mb-5">
            {t("home:contactUs.callUs", { defaultValue: "Bel ons:" })}{" "}
            <Link href={"tel:+31627311410"} className="text-[--color-primary]">
              +31 627 311 410
            </Link>
          </p>
          <p className="not-prose font-bold text-base md:text-xl mb-5">
            {t("home:contactUs.emailUs", { defaultValue: "Mail ons:" })}{" "}
            <Link
              href={"mailto:info@untameable.io"}
              className="text-[--color-primary]"
            >
              info@untameable.io
            </Link>
          </p>

          <p className="not-prose font-bold text-base md:text-xl mb-5">
            {t("home:contactUs.connectWithUs", {
              defaultValue: "Verbind met ons op social media",
            })}
          </p>

          <div className="flex justify-center xl:justify-start">
            <Link
              href="https://www.linkedin.com/company/untameable/"
              className="text-center"
            >
              <FaLinkedin size={31.5} />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
