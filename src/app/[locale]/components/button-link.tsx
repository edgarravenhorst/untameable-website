import Link from "next/link";
import React from "react";
import { tw } from "../helper/tw";

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
          "px-4",
          "min-w-[253px]",
          "text-xl",
          "h-[53px]",
          "flex",
          "items-center",
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
