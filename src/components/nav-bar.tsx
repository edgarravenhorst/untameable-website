'use client';
import { tw } from '@/helper/tw';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import { LanguageChanger } from './language-changer';
import { Logo } from './logo';

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => setShowMenu(window.scrollY >= 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav
      className={tw(
        'flex justify-between w-full text-base p-12 fixed top-0  z-[100] font-extrabold not-prose',
        'max-md:px-6 max-md:py-4 max-md:z-50 transition-all duration-300',
        showMenu
          ? 'bg-[rgba(17,27,43,0.75)] p-4 [&_.logo]:max-w-[125px] backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <Logo className='logo max-w-[179px] max-md:max-w-[125px] transition-all duration-300' />

      <div className='flex items-center gap-6 '>
        <Link href='/mindset' className='no-underline text-white max-sm:hidden'>
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
