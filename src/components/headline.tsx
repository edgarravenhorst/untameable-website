import { tw } from "@/helper/tw";
import React, { ComponentProps } from "react";

interface HeadlineProps extends ComponentProps<"h1"> {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  noLines?: boolean;
}

export const Headline: React.FC<HeadlineProps> = ({
  primary,
  secondary,
  className,
  noLines,
}) => {
  return (
    <h1
      className={tw(
        "not-prose",
        "text-white",
        "flex",
        "flex-col",
        "whitespace-nowrap",
        "text-[10vw]",
        "sm:text-6xl",
        "md:text-7xl",
        "lg:text-8xl",
        "xl:text-9xl",
        "!leading-none",
        "font-extrabold",
        "justify-center",
        "w-[100%]",
        "mx-auto",
        noLines && "items-center",
        className
      )}
    >
      <span className="inline-flex flex-1 items-center gap-8">
        {!secondary && !noLines && (
          <hr className="w-1/5 border-[_var(--color-primary)]" />
        )}
        <span>{primary}</span>
        {!noLines && <hr className="w-1/5 border-[_var(--color-primary)]" />}
      </span>

      {secondary && (
        <span className="inline-flex flex-1 items-center gap-8">
          {!noLines && <hr className="w-1/5 border-[_var(--color-primary)]" />}
          <span>{secondary}</span>
        </span>
      )}
    </h1>
  );
};
