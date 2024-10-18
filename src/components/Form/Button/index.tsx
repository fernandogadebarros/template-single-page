import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-full text-write-light px-8 py-3 duration-200',
  variants: {
    variant: {
      primary: 'bg-write-dark hover:bg-full-purple',
      secondary: 'bg-full-tomato hover:bg-full-orange',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <button {...props} className={button({ variant, className })} />;
};
