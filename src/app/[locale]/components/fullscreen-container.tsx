import { ComponentProps } from "react";
import { tw } from "../helper/tw";

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
        "h-svh",
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
