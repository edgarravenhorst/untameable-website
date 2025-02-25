"use client";
import { Divider } from "@/app/[locale]/decoration/divider";
import { tw } from "@/helper/tw";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export const Footer = (props: Props) => {
  // const [isBottom, setIsBottom] = useState(false);

  // // center footer when you scroll to the bottom
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       setIsBottom(true);
  //     } else {
  //       setIsBottom(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <footer className={tw("relative")}>
      <div
        className={tw(
          "not-prose",
          "flex",
          "items-center",
          "justify-center",
          "text-sm",
          "relative",
          "p-9"
        )}
      >
        <Link href="">Terms of service</Link>
        <Divider orientation="vertical" className="h-3 mx-2 border-white " />
        <Link href="">privacy policy</Link>
      </div>
    </footer>
  );
};
