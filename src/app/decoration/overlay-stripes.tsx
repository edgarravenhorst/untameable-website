import { twStyled } from '../helper/tw-styled';

export const OverlayStripes = twStyled('div')([
  'absolute',
  'inset-0',
  'bg-stripes',
  'bg-[length:6px_6px]',
  'sm:bg-[length:10px_10px]',
]);
