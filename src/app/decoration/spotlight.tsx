'use client';

import clsx, { ClassValue } from 'clsx';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SpotlghtProps {
  className: ClassValue[];
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

      x = scrollX + e.screenX;
      y = scrollY + e.screenY - 125;

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

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className='absolute left-0 top-0 w-full h-full overflow-hidden'>
      <div
        ref={spotRef}
        className={twMerge(
          clsx([
            'absolute',
            'left-[50vw]',
            'top-[50vh]',
            'w-[140vw]',
            'h-[140vw]',
            'min-w-[80vh]',
            'min-h-[80vh]',
            'translate-x-[-50%]',
            'translate-y-[-50%]',
            `bg-gradient-radial from-[_var(--spotlight)] to-transparent to-70%`,
            'opacity-75',
            className,
          ])
        )}
      />
    </div>
  );
};
