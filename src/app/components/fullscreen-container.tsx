import { twStyled } from '../helper/tw-styled';

export const FullScreenContainer = twStyled('div')(
  'relative',
  'p-8',
  'md:p-16',
  'flex',
  'w-svw',
  'h-svh',
  'justify-between',
  'items-center',
  'flex-col'
);
