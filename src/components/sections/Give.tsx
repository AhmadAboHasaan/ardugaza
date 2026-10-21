import { ArrowUpRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { contact, integrations } from '@/data/integrations';
import { ctas, give, giveAnchor, pages, support } from '@/content/project';
type Props = {
  /** h2 on the support page, h3 under the "Three ways" heading on the home page. */
  headingLevel?: 2 | 3;
};
/**
 * The giving panel: the four things a gift lifts and any amount, each on its
 * own hosted Stripe checkout. Nothing is collected on the site itself.
 */
export function Give({ headingLevel = 2 }: Props) {
  const giving = integrations.giving;
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <div id={giveAnchor.id} className="panel panel--deep give-panel">
      <div className="give-copy">
        <Icon name={give.icon} tone="sand" />
        <Heading id="give-title">
          {give.title[0]} {give.title[1]}
        </Heading>
        <p className="lead">{give.body}</p>
        <p className="small give-secure">{give.secure}</p>
        <LinkButton href={`${pages.support.href}#safeguarded`} variant="text">
          {give.more}
        </LinkButton>
      </div>
      <div className="give-card">
        <p className="give-label" id="give-levels-label">
          {give.label}
        </p>
        <ul className="give-levels" aria-labelledby="give-levels-label">
          {support.levels.items.map((level) => {
            const body = (
              <>
                <span className="give-level-amount">{level.amount}</span>
                <span className="give-level-title">{level.title}</span>
                <span className="give-level-text">{level.text}</span>
              </>
            );
            return (
              <li key={level.key}>
                {giving.status === 'live' ? (
                  <a
                    className="give-level"
                    href={giving.levels[level.key]}
                    target="_blank"
                    rel="noopener"
                  >
                    {body}
                    <span className="give-level-cta">
                      {give.levelCta} {level.amount}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </a>
                ) : (
                  <div className="give-level give-level--static">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="give-any">
          <p>{giving.status === 'live' ? give.any.text : give.pending}</p>
          {giving.status === 'live' ? (
            <LinkButton
              href={giving.any}
              variant="white"
              target="_blank"
              rel="noopener"
            >
              {give.any.cta}
            </LinkButton>
          ) : (
            <LinkButton href={contact.mailto(ctas.mailSubjects.general)}>
              {ctas.conversation}
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}
