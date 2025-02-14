import React from "react";
import { TextBox } from "./text-box";
import { Divider } from "../decoration/divider";

type Props = {};

export const HowWeHelp = (props: Props) => {
  return (
    <section>
      <h2 className="text-center text-xl md:text-[1.75rem] mb-6 not-prose text-white font-extrabold">
        How we can help you:
      </h2>

      <div className="flex flex-wrap gap-10 justify-center">
        <TextBox
          title="Web & Platform development"
          text="We develop user-friendly solutions tailored to your organization."
          isBigTitle
        />
        <TextBox
          title="Process optimization"
          text="We simplify processes and boost productivity"
          isBigTitle
        />
        <TextBox
          title="IoT & Automation"
          text="We integrate systems and devices, enabling faster and more efficient workflows."
          isBigTitle
        />
        <TextBox
          title="Strategic innovation"
          text="We explore new ideas and growth opportunities—from vision to realization."
          isBigTitle
        />
      </div>
      <Divider orientation="vertical" className={"h-10 mx-auto my-[3.75rem]"} />
    </section>
  );
};
