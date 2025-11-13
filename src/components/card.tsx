import Link from 'next/link';

type CardProps = React.PropsWithChildren<{
  title: string;
  subtitle?: string;
  date?: string;
  by?: string;
  href: string;
}>;

export const Card = ({
  children,
  title,

  href,
}: CardProps) => {
  return (
    <div className='grid lg:flex-[45%]  p-8 bg-slate-900/30'>
      <h3 className='!mt-0'>{title}</h3>
      <p className='!mb-0'>{children}</p>
      {href && (
        <Link
          href={href}
          className='self-end justify-self-end inline-block no-underline bg-[--color-primary] text-[--background] font-bold py-1 px-3 rounded mt-4'
        >
          Learn more
        </Link>
      )}
    </div>
  );
};
