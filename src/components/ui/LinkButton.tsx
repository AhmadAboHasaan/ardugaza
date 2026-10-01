import { ArrowUpRight } from 'lucide-react';
import type { ComponentProps } from 'react';
type Props = ComponentProps<'a'> & {
  variant?: 'primary' | 'text' | 'light';
  arrow?: boolean;
};
export function LinkButton({
  children,
  variant = 'primary',
  arrow = true,
  className = '',
  ...props
}: Props) {
  return (
    <a
      className={`link-button link-button--${variant} ${className}`}
      {...props}
    >
      {children}
      {arrow && <ArrowUpRight size={20} aria-hidden="true" />}
    </a>
  );
}
