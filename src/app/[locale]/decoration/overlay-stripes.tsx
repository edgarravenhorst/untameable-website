import { tw } from '@/helper/tw';

export type StripedOverlayProps = React.ComponentProps<'div'>;

export const StripedOverlay: React.FC<StripedOverlayProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={tw(
        'absolute',
        'w-full',
        'h-full',
        'bg-stripes',
        'bg-[length:8px_8px]',
        'sm:bg-[length:8px_8px]',
        className
      )}
    />
  );
};
