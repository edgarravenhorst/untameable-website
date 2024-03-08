import { Box, BoxProps } from '../components/helpers';

const dividerClasses = {
  vertical: 'w-0 h-full border-l',
  horizontal: 'w-full h-0 border-t',
};

export interface DividerProps extends BoxProps {
  orientation: 'vertical' | 'horizontal';
}

export const Divider: React.FC<DividerProps> = ({ orientation, ...props }) => {
  return (
    <Box
      {...props}
      className={[
        'border-[_var(--color-primary)]',
        dividerClasses[orientation],
        props.className,
      ]}
    />
  );
};
