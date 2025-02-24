import { tw } from "@/helper/tw";
import { ComponentProps } from "react";

export const FullScreenContainer: React.FC<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={tw(
        "relative",
        "p-8",
        "md:p-16",

        "flex",
        "w-svw",
        "min-h-svh",
        "justify-between",
        "items-center",
        "flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};
