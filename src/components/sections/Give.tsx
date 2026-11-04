import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { StatusTag } from '@/components/ui/StatusTag';
import { Progress } from '@/components/ui/Progress';
import {
  checkoutHref,
  contact,
  giftAmounts,
  giftRef,
  integrations,
} from '@/data/integrations';
import { ctas, give, giveAnchor, pages, support } from '@/content/project';
import {
  currentStage,
  projectHref,
  projects,
  spell,
  stageName,
  type Project,
} from '@/content/projects';
type Props = {
  /** h2 on the support page, h3 under the "Three ways" heading on the home page. */
  headingLevel?: 2 | 3;
  /**
   * Organisation mode (default): a gift to Ardú itself, in a quick amount or
   * any amount, with the project stage open for funding beside it. Project
   * mode: the project's gift levels and any amount for its open stage.
   */
  mode?: 'organisation' | 'project';
  project?: Project;
  id?: string;
  /** A heading in place of the default, where the page already says "Support Ardú". */
  heading?: string;
  /** Show the project stage open now beside the organisation gift. */
  withProject?: boolean;
};
const external = { target: '_blank', rel: 'noopener' } as const;
/**
 * The giving panel. Every gift opens a hosted Stripe checkout carrying a
 * reference to where it is meant to go; nothing is collected on the site.
 */
export function Give({
  headingLevel = 2,
  mode = 'organisation',
  project,
  id = giveAnchor.id,
  heading,
  withProject = true,
}: Props) {
  const giving = integrations.giving;
  const live = giving.status === 'live';
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const featured = mode === 'organisation' ? projects[0] : project;
  const stage = featured ? currentStage(featured) : null;
  const title = heading ? (
    heading
  ) : mode === 'project' && featured ? (
    `Fund ${featured.name}.`
  ) : (
    <>
      {give.title[0]} {give.title[1]}
    </>
  );
  const body = mode === 'project' ? support.levels.lead : give.body;
  const anyHref = !live
    ? null
    : mode === 'project' && featured && stage
      ? checkoutHref(giving.any, giftRef.stage(featured.slug, stage.number))
      : checkoutHref(giving.any, giftRef.organisation);
  const anyText =
    mode === 'project' && stage
      ? `Any amount moves ${stageName(stage).toLowerCase()}.`
      : give.any.text;
  return (
    <div id={id} className="panel panel--deep give-panel">
      <div className="give-copy">
        <Icon name={give.icon} tone="sand" />
        <Heading id={`${id}-title`}>{title}</Heading>
        <p className="lead">{body}</p>
        <p className="small give-secure">{give.secure}</p>
        <LinkButton href={`${pages.support.href}#safeguarded`} variant="text">
          {give.more}
        </LinkButton>
      </div>
      <div className="give-card">
        {mode === 'project' && featured && (
          <>
            <p className="give-label" id={`${id}-levels-label`}>
              {give.label}
            </p>
            <ul className="give-levels" aria-labelledby={`${id}-levels-label`}>
              {support.levels.items.map((level) => {
                const content = (
                  <>
                    <span className="give-level-amount">{level.amount}</span>
                    <span className="give-level-title">{level.title}</span>
                    <span className="give-level-text">{level.text}</span>
                  </>
                );
                return (
                  <li key={level.key}>
                    {live ? (
                      <a
                        className="give-level"
                        href={checkoutHref(
                          giving.levels[level.key],
                          giftRef.level(featured.slug, level.key),
                        )}
                        {...external}
                      >
                        {content}
                        <span className="give-level-cta">
                          {give.levelCta} {level.amount}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      </a>
                    ) : (
                      <div className="give-level give-level--static">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {mode === 'organisation' && (
          <>
            <p className="give-label" id={`${id}-amounts-label`}>
              {give.organisationLabel}
            </p>
            {live && (
              <ul
                className="give-amounts"
                aria-labelledby={`${id}-amounts-label`}
              >
                {giftAmounts.map((amount) => (
                  <li key={amount}>
                    <a
                      className="give-amount"
                      href={checkoutHref(
                        giving.any,
                        giftRef.organisation,
                        amount,
                      )}
                      aria-label={`Give £${amount} to Ardú`}
                      {...external}
                    >
                      £{amount}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        <div className="give-any">
          <p>{live ? anyText : give.pending}</p>
          {anyHref ? (
            <LinkButton href={anyHref} variant="white" {...external}>
              {give.any.cta}
            </LinkButton>
          ) : (
            <LinkButton href={contact.mailto(ctas.mailSubjects.general)}>
              {ctas.conversation}
            </LinkButton>
          )}
        </div>
        {mode === 'organisation' && withProject && featured && (
          <div className="give-project">
            <p className="give-label">{give.projectLabel}</p>
            <div className="give-project-row">
              <div className="give-project-copy">
                <StatusTag status={featured.status} />
                <p className="give-project-name">{featured.name}</p>
                {stage && (
                  <p className="give-project-standing">
                    Funding now: {stageName(stage).toLowerCase()} of{' '}
                    {spell(featured.stages.items.length)}, {stage.title}
                  </p>
                )}
              </div>
              {stage?.funding && (
                <Progress
                  funding={stage.funding}
                  label={`${featured.name}, ${stageName(stage)}, ${stage.title}`}
                />
              )}
            </div>
            <Link
              href={`${projectHref(featured.slug)}#fund`}
              className="link-button link-button--text"
            >
              {give.projects.cta}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
