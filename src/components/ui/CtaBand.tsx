import { LinkButton } from '@/components/ui/LinkButton';
import { ctaBand, ctas, pages } from '@/content/project';
import { integrations } from '@/data/integrations';
type Props = { title?: string; body?: string; lead?: 'give' | 'partner' };
/** The closing call to action on every page: give and partner, the lead one in sand. */
export function CtaBand({
  title = ctaBand.title,
  body = ctaBand.body,
  lead = 'give',
}: Props) {
  const giving = integrations.giving;
  const variant = (which: 'give' | 'partner') =>
    which === lead ? 'light' : 'outline';
  const give =
    giving.status === 'live' ? (
      <LinkButton
        href={giving.url}
        variant={variant('give')}
        target="_blank"
        rel="noopener"
      >
        {ctas.give}
      </LinkButton>
    ) : (
      <LinkButton href={pages.support.href} variant={variant('give')}>
        {pages.support.title}
      </LinkButton>
    );
  const partner = (
    <LinkButton href={pages.partners.href} variant={variant('partner')}>
      {ctas.partner}
    </LinkButton>
  );
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-panel">
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
            {lead === 'partner' ? (
              <>
                {partner}
                {give}
              </>
            ) : (
              <>
                {give}
                {partner}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
