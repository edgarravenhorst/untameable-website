import React from "react";
import { tw } from "../helper/tw";
import { TextBoxWithIcon } from "./text-box-with-icon";
import { Divider } from "../decoration/divider";

type Props = {};

export const WeConnect = (props: Props) => {
  return (
    <section>
      <h2 className="text-center text-xl md:text-[1.75rem] mb-6 not-prose text-white font-extrabold">
        We connect with:
      </h2>
      <div className=" flex gap-6">
        <TextBoxWithIcon
          iconName="growth"
          subtitle="Businesses focussed on:"
          title="Growth & Efficiency"
          text="From startups to SMEs and beyond—if you want to grow and streamline operations."
        />
        <TextBoxWithIcon
          iconName="idea"
          subtitle="Organization with"
          title="Innovative Ideas"
          text="For those bold enough to embrace new insights and stay ahead of the curve."
        />

        <TextBoxWithIcon
          iconName="balance"
          subtitle="Teams seeking"
          title="Focus & Balance"
          text="For those wanting to drive change and innovation, whether through automation, digitalization, or sustainability."
        />
      </div>

      <Divider
        orientation="vertical"
        className={"h-10 mx-auto mt-[3.75rem] mb-[7.5rem]"}
      />
    </section>
  );
};
