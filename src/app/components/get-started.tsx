import Image from "next/image";
import React from "react";
import { tw } from "../helper/tw";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

type Props = {};

export const GetStarted = (props: Props) => {
  return (
    <section className="w-full max-w-[1041px] mx-auto flex gap-24">
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
            Short introduction
          </h3>
          <p className="not-prose text-xl font-semibold leading-8">
            My name is Edgar Ravenhorst. With over 10 years of experience in
            full-stack web development, I work alongside you and the team to
            achieve the results you strive for.
          </p>
        </div>
      </article>
      <article className="gap-24  ">
        <div className="w-full max-w-[534px] h-full max-h-[381.52px] flex flex-col justify-center mb-16">
          <h2 className="not-prose text-8xl whitespace-nowrap font-extrabold mb-3">
            Get started!
          </h2>
          <p className="not-prose text-[1.625rem] leading-10">
            Work with us and discover what we can do for your organization.
          </p>
        </div>
        <div>
          <h3 className="not-prose text-[1.625rem] font-extrabold leading-10 mb-2">
            Contact us
          </h3>
          <p className="not-prose text-[1.375rem] font-bold">
            Give a call:{" "}
            <Link href={"tel:+31627311410"} className="text-[--color-primary]">
              +31 627 311 410
            </Link>
          </p>
          <p className="not-prose  text-[1.375rem] font-bold">
            Email us:{" "}
            <Link
              href={"mailto:info@untameable.io"}
              className="text-[--color-primary]"
            >
              info@untameable.io
            </Link>
          </p>

          <p className="not-prose  text-[1.375rem] font-bold">
            Connect with us on social media
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
