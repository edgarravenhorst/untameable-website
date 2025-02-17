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
          "py-1",
          "px-4",
          "min-w-[253px]",
          className ? className : ""
        )}
        style={{
          clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
        }}
      >
        {text}
      </Link>
    </div>
  );
};
