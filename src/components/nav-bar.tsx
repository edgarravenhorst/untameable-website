"use client";
import React, { useState } from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { LanguageChanger } from "./language-changer";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import { tw } from "../app/[locale]/helper/tw";

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between  w-full  text-base pb-8">
      <Logo />

      <div className="flex items-center gap-2 md:gap-6  ">
        <Link href="/mindset" className="no-underline text-white ">
          {t("common:ourMindset", { defaultValue: "Onze mindset" })}
        </Link>

        <Link
          href="https://www.linkedin.com/company/untameable/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={26} />
        </Link>
        <LanguageChanger />
      </div>
      {/* 
      <div className="block sm:hidden">
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>

        <div
          className={tw(
            "transition-all",
            "bg-[--background]",
            "fixed",
            "bottom-0",
            "left-0",
            "right-0",
            "top-0",
            "z-10"
          )}
        >
          <div className="flex flex-col items-center">
            <Logo />
            <Link href="/mindset" className="no-underline text-white ">
              {t("common:ourMindset", { defaultValue: "Onze mindset" })}
            </Link>

            <Link
              href="https://www.linkedin.com/company/untameable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={26} />
            </Link>
            <LanguageChanger />
          </div>
        </div>
      </div> */}
    </nav>
  );
};
