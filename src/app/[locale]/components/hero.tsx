import React from "react";
import { tw } from "../helper/tw";
import { ButtonLink } from "./button-link";
import { TextBox } from "./text-box";
import { Divider } from "../decoration/divider";

type Props = {};

export const Hero = (props: Props) => {
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
              "font-extrabold"
            )}
          >
            <span className="block">Determined to</span>
            <span className="block">move forward.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-[1.625rem]  max-w-[921px] md:leading-10  not-prose py-10">
            We work on projects that make a real difference, providing clear,
            efficient, and goal-oriented solutions. We remove obstacles and
            deliver solutions that work, so you can focus on what truly matters.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5 justify-end  h-full pb-10 ">
            <ButtonLink url="/mindset" text={"Discover our mindset"} />
            <ButtonLink url="" text={"Read example cases"} spaceRight />
            <ButtonLink url="#contact-us" text={"Connect with us"} />
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-56 flex-wrap">
        <TextBox
          title="We do what works"
          text="We keep it simple: if it works, it works—no inflated marketing talk."
        />
        <TextBox
          title="We collaborate"
          text="We think strategically with you and support you through execution."
        />
        <TextBox
          title="We solve"
          text="We remove obstacles with solutions that truly work."
        />
        <TextBox
          title="We deliver"
          text="We're committed to bringing your vision to life and making a real impact."
        />
      </div>

      <Divider orientation="vertical" className={"h-10 mx-auto my-[3.75rem]"} />
    </section>
  );
};
