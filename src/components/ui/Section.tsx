import type { ComponentProps } from 'react';
export function Section({
  children,
  className = '',
  ...props
}: ComponentProps<'section'>) {
  return (
    <section className={`section ${className}`} {...props}>
      {children}
    </section>
  );
}
