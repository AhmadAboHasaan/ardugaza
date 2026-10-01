import { Plus } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { packages } from '@/content/project';
import { LinkButton } from '@/components/ui/LinkButton';
export function Funding() {
  return (
    <Section id="plan" className="funding" aria-labelledby="funding-title">
      <div className="section-heading">
        <h2 id="funding-title">
          A plan you can
          <br />
          put your support behind.
        </h2>
        <p>
          Four visible packages. Each tied to work on the ground, with its own
          evidence of spending.
        </p>
      </div>
      <div className="funding-total">
        <div>
          <span>Opening + first six months · packages 1–3</span>
          <strong>$245k–$277k</strong>
        </div>
        <LinkButton href="#support">Fund the next seat</LinkButton>
      </div>
      <div className="funding-list">
        {packages.map((p) => (
          <details key={p.id} className="funding-package">
            <summary>
              <span className="package-number">{p.number}</span>
              <span className="package-title">
                <strong>{p.title}</strong>
                <span>{p.short}</span>
              </span>
              <span className="package-amount">{p.amount}</span>
              <Plus className="package-plus" size={22} aria-hidden="true" />
            </summary>
            <div className="package-detail">
              <p>{p.detail}</p>
              <p>
                <strong>How it can be verified</strong>
                <br />
                {p.evidence}
              </p>
            </div>
          </details>
        ))}
      </div>
      <p className="funding-caveat">
        Estimates at Gaza prices as of September 2026. Major expenses require
        written quotes before spending. The solar figure is indicative and
        excludes cabling, installation and installer fees; these will be added
        openly after the site survey. Package 4 is additional and conditional,
        not part of the opening total.
      </p>
    </Section>
  );
}
