import { twStyled } from '../helper/tw-styled';

export const OverlayStripes = twStyled('div')([
  'absolute',
  'w-full',
  'h-full',
  'bg-stripes',
  'bg-[length:6px_6px]',
  'sm:bg-[length:10px_10px]',
]);
