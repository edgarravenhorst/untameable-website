'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaWindows } from 'react-icons/fa';
import { LanguageChanger } from './language-changer';
import { Logo } from './logo';
import { tw } from '@/helper/tw';

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => setShowMenu(window.scrollY >= 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={tw('flex justify-between w-full text-base p-12 fixed top-0 z-10 font-extrabold not-prose', 'max-md:px-6 max-md:py-4 max-md:z-50 max-md:transi max-md:transition max-md:duration-300', showMenu ? 'bg-[#111b2b]' : 'bg-transparent')}>
      <Logo />

      <div className='flex items-center gap-2 md:gap-6 '>
        <Link href='/mindset' className='no-underline text-white '>
          {t('common:ourMindset', { defaultValue: 'Onze mindset' })}
        </Link>

        <Link
          href='https://www.linkedin.com/company/untameable/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='text-primary w-[26px] h-[26px] max-md:size-6' />
        </Link>
        <LanguageChanger />
      </div>
    </nav>
  );
};
