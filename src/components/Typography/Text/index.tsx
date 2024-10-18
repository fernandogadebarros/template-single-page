import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export interface HeadingProps
  extends ComponentProps<'p'>,
    VariantProps<typeof paragraph> {
  asChild?: boolean;
}

const paragraph = tv({
  base: 'text-write-brown font-medium leading-6',
  variants: {
    variant: {
      light: 'text-write-light',
    },
  },
});

export const Text = ({
  asChild,
  variant,
  className,
  ...props
}: HeadingProps) => {
  const Component = asChild ? Slot : 'p';
  return <Component {...props} className={paragraph({ variant, className })} />;
};
