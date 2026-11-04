import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { GiftBuilder } from '@/components/giving/GiftBuilder';
import {
  checkoutHref,
  contact,
  giftRef,
  projectCheckouts,
  stageGiftAmounts,
} from '@/data/integrations';
import { ctas, fundProject, give, pages } from '@/content/project';
import { currentStage, stageName, type Project } from '@/content/projects';
/**
 * A project's own giving, on its own page: any amount for the stage open
 * now, with the bar it moves, or one of its pieces outright. Every checkout
 * carries the project's reference, so the gift goes to this project alone.
 */
export function ProjectFund({ project }: { project: Project }) {
  const checkouts = projectCheckouts(project.slug);
  const stage = currentStage(project);
  const reference = stage
    ? giftRef.stage(project.slug, stage.number)
    : giftRef.project(project.slug);
  const pieces = checkouts
    ? project.pieces
        .filter((piece) => checkouts.pieces[piece.key])
        .map((piece) => ({
          key: piece.key,
          amount: piece.amount,
          title: piece.title,
          text: piece.text,
          href: checkoutHref(
            checkouts.pieces[piece.key],
            giftRef.piece(project.slug, piece.key),
          ),
          icon: <Icon name={piece.icon} size={18} />,
        }))
    : [];
  return (
    <Section id="fund" className="give fund" aria-labelledby="fund-title">
      <div className="panel panel--deep give-panel" data-spotlight>
        <div className="give-copy">
          <Icon name="heart" tone="sand" />
          <h2 id="fund-title">{project.fund.title}</h2>
          <p className="lead">{project.fund.body}</p>
          <LinkButton href={`${pages.support.href}#safeguarded`} variant="text">
            {give.more}
          </LinkButton>
          <p className="give-switch">
            {fundProject.organisation.text}{' '}
            <Link href={pages.support.href}>
              {fundProject.organisation.cta}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
        <div className="give-card">
          {checkouts ? (
            <GiftBuilder
              recipient={project.name}
              checkout={checkouts.any}
              reference={reference}
              amounts={stageGiftAmounts}
              initial={100}
              copy={{
                label: stage
                  ? `${fundProject.amountLabel} ${stageName(stage).toLowerCase()}, ${stage.title}`
                  : `${fundProject.amountLabel} ${project.name}`,
                other: fundProject.other,
                minimum: give.minimum,
                secure: fundProject.secure,
                impact: fundProject.noStage,
                mode: {
                  legend: fundProject.label,
                  any: fundProject.any,
                  pieces: fundProject.pieces,
                },
                pieceLabel: `${fundProject.pieceLabel} ${project.name}`,
                piecesNote: fundProject.piecesNote,
              }}
              stage={
                stage
                  ? {
                      name: stageName(stage).toLowerCase(),
                      title: stage.title,
                      funding: stage.funding,
                    }
                  : null
              }
              pieces={pieces}
            />
          ) : (
            <div className="gift gift--pending">
              <p>{give.pending}</p>
              <LinkButton href={contact.mailto(ctas.mailSubjects.funder)}>
                {ctas.conversation}
              </LinkButton>
            </div>
          )}
        </div>
      </div>
      <article className="funders-note" data-reveal>
        <Icon name="landmark" />
        <div>
          <h3>{project.fund.funders.title}</h3>
          <p>{project.fund.funders.body}</p>
        </div>
        <LinkButton
          href={contact.mailto(ctas.mailSubjects.funder)}
          variant="outline"
        >
          {ctas.conversation}
        </LinkButton>
      </article>
    </Section>
  );
}
