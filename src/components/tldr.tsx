import { tw } from "@/helper/tw";
import { ComponentProps } from "react";

export type TLDRProps = ComponentProps<"p">;

export const TLDR: React.FC<TLDRProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={tw("text-[_var(--color-primary)]", "italic", className)}
    >
      <strong className="text-inherit">TL;DR</strong> - {children}
    </p>
  );
};
