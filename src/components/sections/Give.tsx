import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { StatusTag } from '@/components/ui/StatusTag';
import { Progress } from '@/components/ui/Progress';
import { contact, integrations } from '@/data/integrations';
import { ctas, give, giveAnchor, pages, support } from '@/content/project';
import {
  currentStage,
  projectHref,
  projects,
  type Project,
} from '@/content/projects';
type Props = {
  /** h2 on the support page, h3 under the "Three ways" heading on the home page. */
  headingLevel?: 2 | 3;
  /**
   * Organisation mode (default): any amount for Ardú itself, with the project
   * stage open for funding beside it. Project mode: the stage's own levels,
   * each on its hosted checkout, for the project page.
   */
  mode?: 'organisation' | 'project';
  project?: Project;
  id?: string;
};
/**
 * The giving panel. Every gift opens a hosted Stripe checkout; nothing is
 * collected on the site itself.
 */
export function Give({
  headingLevel = 2,
  mode = 'organisation',
  project,
  id = giveAnchor.id,
}: Props) {
  const giving = integrations.giving;
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const featured = mode === 'organisation' ? projects[0] : project;
  const stage = featured ? currentStage(featured) : null;
  const title =
    mode === 'project' ? (
      support.levels.title
    ) : (
      <>
        {give.title[0]} {give.title[1]}
      </>
    );
  const body = mode === 'project' ? support.levels.lead : give.body;
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
        {mode === 'project' && (
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
                    {giving.status === 'live' ? (
                      <a
                        className="give-level"
                        href={giving.levels[level.key]}
                        target="_blank"
                        rel="noopener"
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
          <p className="give-label">{give.organisationLabel}</p>
        )}
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
        {mode === 'organisation' && featured && (
          <div className="give-project">
            <p className="give-label">{give.projectLabel}</p>
            <div className="give-project-row">
              <div className="give-project-copy">
                <StatusTag status={featured.status} />
                <p className="give-project-name">{featured.name}</p>
                {stage && (
                  <p className="give-project-standing">{featured.standing}</p>
                )}
              </div>
              {stage?.funding && (
                <Progress
                  funding={stage.funding}
                  label={`${featured.name}, ${featured.standing}`}
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
