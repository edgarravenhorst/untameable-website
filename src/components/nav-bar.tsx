'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import { LanguageChanger } from './language-changer';
import { Logo } from './logo';

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='flex justify-between w-full text-base p-12 fixed top-0 z-10 font-extrabold not-prose'>
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
          <FaLinkedin size={26} className='text-primary' />
        </Link>
        <LanguageChanger />
      </div>
    </nav>
  );
};
