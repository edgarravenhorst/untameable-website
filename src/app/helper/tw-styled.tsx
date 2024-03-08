import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const twStyled = <
  TComponent extends React.ElementType<any>,
  TProps extends React.ComponentProps<TComponent>
>(
  Component: TComponent
) => {
  return (...classNames: ClassValue[]) => {
    const StyledComponent: React.FC<
      Omit<TProps, 'className'> & {
        className?: string | ClassValue[] | undefined;
      }
    > = (props) => {
      const Styled = Component as React.ComponentType<
        Omit<TProps, 'className'>
      >;

      let classNameOverrides = props.className || [];

      if (typeof props.className === 'string') {
        classNameOverrides = [props.className];
      }

      return (
        <Styled
          {...props}
          className={twMerge(clsx(classNames, classNameOverrides))}
        />
      );
    };

    if (typeof Component === 'object' && 'displayName' in Component) {
      StyledComponent.displayName = (Component as any).displayName;
    }

    return StyledComponent;
  };
};
