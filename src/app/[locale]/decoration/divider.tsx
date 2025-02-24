import { tw } from "@/helper/tw";

const dividerClasses = {
  vertical: "w-0 h-full border-l",
  horizontal: "w-full h-0 border-t",
};

export interface DividerProps extends React.ComponentProps<"div"> {
  orientation: "vertical" | "horizontal";
}

export const Divider: React.FC<DividerProps> = ({ orientation, ...props }) => {
  return (
    <div
      {...props}
      className={tw(
        "border-[_var(--color-primary)]",
        dividerClasses[orientation],
        props.className
      )}
    />
  );
};
