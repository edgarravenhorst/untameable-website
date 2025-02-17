import React from "react";
import { tw } from "../helper/tw";

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
        isBigTitle ? "max-h-36" : "max-h-48"
      )}
      style={{ backgroundColor: "rgba(46, 70, 111, 0.1)" }}
    >
      <h2
        className={tw(
          "not-prose",
          "text-lg",
          isBigTitle ? "md:text-[26px]" : "md:text-[22px]",
          "mb-5",
          "text-[--color-primary]"
        )}
      >
        {title}
      </h2>
      <p className="not-prose text-base md:text-xl font-normal">{text}</p>
    </article>
  );
};
