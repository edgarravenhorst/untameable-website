import { tw } from "@/helper/tw";

export type StripedOverlayProps = React.ComponentProps<"div">;

export const StripedOverlay: React.FC<StripedOverlayProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={tw(
        "absolute",
        "w-full",
        "h-full",
        "bg-stripes",
        "bg-[length:6px_6px]",
        "sm:bg-[length:10px_10px]",
        className
      )}
    />
  );
};
