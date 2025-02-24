import Link from "next/link";
import React from "react";
import { tw } from "../app/[locale]/helper/tw";

type ButtonLinkProps = {
  url: string;
  text: string;
  className?: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  url,
  text,
  className,
}) => {
  return (
    <div>
      <Link
        href={url}
        className={tw(
          "inline-block",
          "no-underline",
          "bg-[--color-primary]",
          "text-[--background]",
          "font-bold",
          "text-base",
          "sm:text-lg",
          "md:text-xl",
          "min-w-[220px]",
          "md:min-w-[253px]",
          "pl-6",
          // "pr-8",
          "py-3",
          "sm:py-2",
          className ? className : ""
        )}
        style={{
          clipPath: "polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)",
        }}
      >
        {text}
      </Link>
    </div>
  );
};
