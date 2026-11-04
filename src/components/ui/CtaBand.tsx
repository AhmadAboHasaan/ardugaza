import type { ReactNode } from 'react';
import { LinkButton } from '@/components/ui/LinkButton';
import { ctaBand, ctas, giveAnchor, pages } from '@/content/project';
type Props = {
  title?: string;
  body?: string;
  lead?: 'give' | 'partner';
  /** Where "Support Ardú" goes: the organisation's giving panel on the support page by default. */
  giveHref?: string;
  /** Actions of the page's own, in place of Support Ardú and Partner with us (a project's page). */
  actions?: ReactNode;
};
/** The closing call to action on every page, the lead action in sand. */
export function CtaBand({
  title = ctaBand.title,
  body = ctaBand.body,
  lead = 'give',
  giveHref = giveAnchor.href,
  actions,
}: Props) {
  const variant = (which: 'give' | 'partner') =>
    which === lead ? 'light' : 'outline';
  const give = (
    <LinkButton href={giveHref} variant={variant('give')}>
      {ctas.give}
    </LinkButton>
  );
  const partner = (
    <LinkButton href={pages.partners.href} variant={variant('partner')}>
      {ctas.partner}
    </LinkButton>
  );
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-panel" data-spotlight data-reveal>
        <svg
          className="cta-road"
          viewBox="0 0 640 200"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M-20 190 C180 190 260 120 340 90 S560 40 660 10" />
        </svg>
        <div className="cta-copy">
          <h2 id="cta-title">{title}</h2>
          <p>{body}</p>
          <div className="actions">
            {actions ??
              (lead === 'partner' ? (
                <>
                  {partner}
                  {give}
                </>
              ) : (
                <>
                  {give}
                  {partner}
                </>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
