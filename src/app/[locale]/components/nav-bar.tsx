"use client";
import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LanguageChanger } from "./language-changer";
import { useTranslation } from "react-i18next";

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex justify-between  w-full text-base">
      <Logo />

      <div className="flex items-center gap-6 ">
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
    </nav>
  );
};
