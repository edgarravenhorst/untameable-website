"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface SpotlghtProps extends React.ComponentProps<"div"> {
  followMouse?: boolean;
}

export const Spotlight: React.FC<SpotlghtProps> = ({
  followMouse,
  className,
}) => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followMouse) return;

    let x = 0;
    let y = 0;
    let scrollY = 0;
    let scrollX = 0;

    const onMove = (e: MouseEvent) => {
      if (!spotRef.current) return;

      scrollX + window.scrollX;
      scrollY = window.scrollY;

      x = scrollX + e.clientX;
      y = scrollY + e.clientY - 125;

      spotRef.current.style.left = `${x}px`;
      spotRef.current.style.top = `${y}px`;
    };

    const onScroll = () => {
      if (!spotRef.current) return;

      const deltaY = window.scrollY - scrollY;
      const deltaX = window.scrollX - scrollX;

      spotRef.current.style.left = `${x + deltaX}px`;
      spotRef.current.style.top = `${y + deltaY}px`;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [followMouse]);

  return (
    <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
      <div
        ref={spotRef}
        className={twMerge(
          clsx([
            "absolute",
            "left-[40vw]",
            "top-[40vh]",
            "w-[100vw]",
            "h-[100vw]",
            "min-w-[40vh]",
            "min-h-[40vh]",
            "translate-x-[-50%]",
            "translate-y-[-50%]",
            `bg-gradient-radial from-[_var(--spotlight)] to-transparent to-70%`,
            "opacity-75",
            className,
          ])
        )}
      />
    </div>
  );
};
