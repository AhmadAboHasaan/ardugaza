'use client';
import { useId, useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Progress } from '@/components/ui/Progress';
import { checkoutHref, minimumGift } from '@/data/integrations';
import { percent, pounds, type StageFunding } from '@/lib/funding';

/** A piece of a project with its own checkout, its icon drawn on the server. */
export type BuilderPiece = {
  key: string;
  amount: number;
  title: string;
  text: string;
  href: string;
  icon: ReactNode;
};

/** The stage a project's any-amount gift moves, for the live preview. */
export type BuilderStage = {
  /** "stage two" */
  name: string;
  /** "Light" */
  title: string;
  funding: StageFunding | null;
};

export type BuilderCopy = {
  /** Legend over the amounts: "Choose your gift to Ardú". */
  label: string;
  other: string;
  minimum: string;
  secure: string;
  /** Organisation, or a project with no stage open: "to Ardú, put where…". */
  impact?: string;
  /** Project mode: the two ways to give, and the pieces' legend and note. */
  mode?: { legend: string; any: string; pieces: string };
  pieceLabel?: string;
  piecesNote?: string;
};

type Props = {
  /** Who receives the gift: "Ardú", or a project's name. */
  recipient: string;
  /** The any-amount checkout and the reference that keeps the gift where it belongs. */
  checkout: string;
  reference: string;
  amounts: readonly number[];
  initial: number;
  copy: BuilderCopy;
  stage?: BuilderStage | null;
  pieces?: readonly BuilderPiece[];
  className?: string;
};

const MAX = 100000;

/**
 * Choose a gift and see what it does before paying. The amount and, for a
 * project, the bar of the stage it moves update as you choose; the button
 * opens the hosted Stripe checkout with the amount prefilled and the gift's
 * reference attached. Nothing is collected here.
 */
export function GiftBuilder({
  recipient,
  checkout,
  reference,
  amounts,
  initial,
  copy,
  stage = null,
  pieces = [],
  className = '',
}: Props) {
  const uid = useId();
  const [mode, setMode] = useState<'any' | 'pieces'>('any');
  const [choice, setChoice] = useState<number | 'other'>(initial);
  const [other, setOther] = useState('');
  const [pieceKey, setPieceKey] = useState(pieces[0]?.key ?? '');
  const piece = pieces.find((p) => p.key === pieceKey) ?? pieces[0];

  const typed = Number.parseInt(other, 10);
  const amount = choice === 'other' ? typed : choice;
  const valid =
    Number.isInteger(amount) && amount >= minimumGift && amount <= MAX;

  const impact = (() => {
    if (!valid) return copy.minimum;
    const funding = stage?.funding;
    if (stage && funding && funding.target > 0) {
      const after = funding.raised + amount;
      if (after >= funding.target)
        return `Your ${pounds(amount)} would complete ${stage.name}, ${stage.title}.`;
      return `Your ${pounds(amount)} takes ${stage.name}, ${stage.title}, from ${percent(funding.raised / funding.target)} to ${percent(after / funding.target)} of ${pounds(funding.target)}.`;
    }
    return `${pounds(amount)} ${copy.impact ?? ''}`.trim();
  })();

  const anyHref = valid ? checkoutHref(checkout, reference, amount) : undefined;
  const showPieces = mode === 'pieces' && pieces.length > 0 && piece;

  return (
    <div className={`gift ${stage?.funding ? 'gift--stage' : ''} ${className}`}>
      {pieces.length > 0 && copy.mode && (
        <fieldset className="gift-mode">
          <legend className="visually-hidden">{copy.mode.legend}</legend>
          {(['any', 'pieces'] as const).map((value) => (
            <label key={value} className="gift-mode-option">
              <input
                type="radio"
                name={`${uid}-mode`}
                value={value}
                checked={mode === value}
                onChange={() => setMode(value)}
              />
              <span>{copy.mode![value]}</span>
            </label>
          ))}
        </fieldset>
      )}

      {showPieces ? (
        <div className="gift-pane" key="pieces">
          <fieldset className="gift-fieldset">
            <legend className="gift-label">{copy.pieceLabel}</legend>
            <div className="gift-pieces">
              {pieces.map((p) => (
                <label key={p.key} className="gift-piece">
                  <input
                    type="radio"
                    name={`${uid}-piece`}
                    value={p.key}
                    checked={piece.key === p.key}
                    onChange={() => setPieceKey(p.key)}
                  />
                  <span className="gift-piece-face">
                    {p.icon}
                    <span className="gift-piece-amount">
                      {pounds(p.amount)}
                    </span>
                    <span className="gift-piece-title">{p.title}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="gift-go">
            <p className="gift-impact" aria-live="polite">
              {piece.text} {copy.piecesNote}
            </p>
            <a
              className="link-button link-button--white gift-cta"
              href={piece.href}
              target="_blank"
              rel="noopener"
            >
              {`Give ${piece.title.charAt(0).toLowerCase()}${piece.title.slice(1)}, ${pounds(piece.amount)}`}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : (
        <div className="gift-pane" key="any">
          <fieldset className="gift-fieldset">
            <legend className="gift-label">{copy.label}</legend>
            <div className="gift-chips">
              {amounts.map((value) => (
                <label key={value} className="gift-chip">
                  <input
                    type="radio"
                    name={`${uid}-amount`}
                    value={value}
                    checked={choice === value}
                    onChange={() => setChoice(value)}
                  />
                  <span>{pounds(value)}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div
            className="gift-other"
            data-active={choice === 'other' ? '' : undefined}
          >
            <label htmlFor={`${uid}-other`}>{copy.other}</label>
            <div className="gift-other-field">
              <span aria-hidden="true">£</span>
              <input
                id={`${uid}-other`}
                type="number"
                inputMode="numeric"
                min={minimumGift}
                max={MAX}
                step={1}
                placeholder="75"
                value={other}
                aria-describedby={`${uid}-impact`}
                onFocus={() => setChoice('other')}
                onChange={(event) => {
                  setOther(event.target.value.replace(/[^\d]/g, ''));
                  setChoice('other');
                }}
              />
            </div>
          </div>
          {stage?.funding && (
            <Progress
              funding={stage.funding}
              label={`${stage.name.charAt(0).toUpperCase()}${stage.name.slice(1)}, ${stage.title}`}
              preview={valid ? amount : 0}
              reveal={false}
              className="gift-preview"
            />
          )}
          <div className="gift-go">
            <p
              className="gift-impact"
              id={`${uid}-impact`}
              aria-live="polite"
              data-invalid={valid ? undefined : ''}
            >
              {impact}
            </p>
            <a
              className="link-button link-button--white gift-cta"
              href={anyHref}
              aria-disabled={valid ? undefined : 'true'}
              target="_blank"
              rel="noopener"
            >
              {valid
                ? `Give ${pounds(amount)} to ${recipient}`
                : `Give to ${recipient}`}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
      <p className="gift-secure">{copy.secure}</p>
    </div>
  );
}
