import { tw } from "@/helper/tw";
import React from "react";

type TextBoxProps = {
  title: string;
  text: string;
  isBigTitle?: boolean;
};

export const TextBox: React.FC<TextBoxProps> = ({
  title,
  text,
  isBigTitle,
}) => {
  return (
    <article
      className={tw(
        "w-full",
        isBigTitle ? "max-w-[605px]" : "max-w-[302px]",
        "p-6",
        isBigTitle ? "min-h-36" : "min-h-48",
        "flex",
        "flex-col"
      )}
      style={{ backgroundColor: "rgba(46, 70, 111, 0.1)" }}
    >
      <h2
        className={tw(
          "not-prose",
          "text-lg",

          isBigTitle
            ? "min-h-20 xl:min-h-max mb-0 xl:mb-5 text-2xl xl:text-[26px]"
            : "md:text-[22px] mb-5",
          "text-[--color-primary]",
          "text-center",
          "xl:text-left"
        )}
      >
        {title}
      </h2>
      <p className="not-prose text-base md:text-xl font-normal text-center xl:text-left ">
        {text}
      </p>
    </article>
  );
};
