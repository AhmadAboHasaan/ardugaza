'use client';
import { useId, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { checkoutHref, minimumGift } from '@/data/integrations';
import { pounds } from '@/lib/funding';

export type BuilderCopy = {
  /** Legend over the amounts: "Choose your gift to Ardú". */
  label: string;
  other: string;
  minimum: string;
  secure: string;
  /** What the gift does, after its amount: "to Ardú, directed to…". */
  impact: string;
};

type Props = {
  /** Who receives the gift: "Ardú". */
  recipient: string;
  /** The any-amount checkout and the reference every gift carries. */
  checkout: string;
  reference: string;
  amounts: readonly number[];
  initial: number;
  copy: BuilderCopy;
  className?: string;
};

const MAX = 100000;

/**
 * Choose a gift and see it in words before paying. The button opens the
 * hosted Stripe checkout with the amount prefilled and the gift's reference
 * attached. Nothing is collected here.
 */
export function GiftBuilder({
  recipient,
  checkout,
  reference,
  amounts,
  initial,
  copy,
  className = '',
}: Props) {
  const uid = useId();
  const [choice, setChoice] = useState<number | 'other'>(initial);
  const [other, setOther] = useState('');

  const typed = Number.parseInt(other, 10);
  const amount = choice === 'other' ? typed : choice;
  const valid =
    Number.isInteger(amount) && amount >= minimumGift && amount <= MAX;
  const impact = valid ? `${pounds(amount)} ${copy.impact}` : copy.minimum;
  const href = valid ? checkoutHref(checkout, reference, amount) : undefined;

  return (
    <div className={`gift ${className}`}>
      <div className="gift-pane">
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
            href={href}
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
      <p className="gift-secure">{copy.secure}</p>
    </div>
  );
}
