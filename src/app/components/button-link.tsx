import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  url: string;
  text: string;
  spaceRight?: boolean;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  url,
  text,
  spaceRight,
}) => {
  return (
    <div>
      <Link
        href={url}
        className="inline-block no-underline bg-[--color-primary] text-[--background] font-bold py-1 px-4 min-w-[253px]"
        style={{
          clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
          marginLeft: spaceRight ? "20px" : "initial",
        }}
      >
        {text}
      </Link>
    </div>
  );
};
