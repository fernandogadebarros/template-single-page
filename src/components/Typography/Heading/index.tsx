import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps
  extends ComponentProps<Heading>,
    VariantProps<typeof heading> {
  asChild?: boolean;
}

const heading = tv({
  base: 'font-bold leading-tight text-5xl/tight',
  variants: {
    variant: {
      dark: 'text-write-black',
      light: 'text-white',
    },
    size: {
      sm: 'text-2xl',
      md: 'text-4xl/tight lg:text-5xl/tight',
    },
  },
  defaultVariants: {
    variant: 'dark',
    size: 'md',
  },
});

export const Heading = ({
  asChild,
  variant,
  size,
  className,
  ...props
}: HeadingProps) => {
  const Component = asChild ? Slot : 'h1';
  return (
    <Component
      className={heading({ variant, size, class: className })}
      {...props}
    />
  );
};
