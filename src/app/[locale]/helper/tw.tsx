import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const tw = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
