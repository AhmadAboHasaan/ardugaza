import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ComponentProps } from 'react';
type Props = ComponentProps<'a'> & {
  href: string;
  variant?: 'primary' | 'text' | 'light' | 'outline' | 'white';
  arrow?: boolean;
};
/** A square, labelled call to action. Internal routes go through next/link; anchors and external URLs stay plain. */
export function LinkButton({
  children,
  href,
  variant = 'primary',
  arrow = true,
  className = '',
  ...props
}: Props) {
  const classes = `link-button link-button--${variant} ${className}`;
  const internal = href.startsWith('/') && !href.startsWith('//');
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight size={20} aria-hidden="true" />}
    </>
  );
  if (internal) {
    return (
      <Link className={classes} href={href} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  );
}
