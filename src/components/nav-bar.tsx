'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import { localePath } from '@/helper/locale-path';
import { tw } from '@/helper/tw';
import { LanguageChanger } from './language-changer';
import { Logo } from './logo';

const navItems = [
  { key: 'approach', hash: '/#approach' },
  { key: 'services', hash: '/#services' },
  { key: 'about', hash: '/#about' },
  { key: 'contact', hash: '/#contact' },
] as const;

export const NavBar = () => {
  const { t, i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => setShowMenu(window.scrollY >= 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const renderLinks = (compact: boolean) => (
    <div
      className={tw(
        'flex items-center gap-6',
        compact && 'w-full justify-between gap-3 text-sm',
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.key}
          href={localePath(i18n.language, item.hash)}
          className="no-underline text-white whitespace-nowrap"
        >
          {t(`common:${item.key}`)}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={tw(
        'flex flex-wrap items-center justify-between w-full text-base p-12 fixed top-0 z-[100] font-extrabold not-prose gap-x-6 gap-y-3',
        'max-md:px-6 max-md:py-4 max-md:z-50 transition-all duration-300',
        showMenu
          ? 'bg-[rgba(17,27,43,0.75)] p-4 [&_.logo]:max-w-[125px] backdrop-blur-xs'
          : 'bg-transparent',
      )}
    >
      <Logo className="logo max-w-[179px] max-md:max-w-[125px] transition-all duration-300" />

      <div className="hidden md:flex">{renderLinks(false)}</div>

      <div className="flex items-center gap-6 max-sm:gap-3 shrink-0">
        <Link
          href="https://www.linkedin.com/company/untameable/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-primary w-[26px] h-[26px] max-md:size-6" />
        </Link>
        <LanguageChanger />
      </div>

      <div className="md:hidden w-full">{renderLinks(true)}</div>
    </nav>
  );
};
