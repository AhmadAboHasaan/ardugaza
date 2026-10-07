import type { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { LinkButton } from '@/components/ui/LinkButton';
import { plan, project } from '@/content/project';
import { contact, integrations } from '@/data/integrations';
export const metadata: Metadata = {
  title: project.planTitle,
  description:
    'The figures behind Ardú’s five stages, how spending is verified, how the place earns part of its own keep, and what is still open. For funders and partners.',
  alternates: { canonical: '/plan' },
};
export default function PlanPage() {
  const giving = integrations.giving;
  return (
    <>
      <Navigation />
      <main id="main" className="plan">
        <header className="section plan-head">
          <p className="eyebrow">{plan.meta}</p>
          <h1>The full plan.</h1>
          <p className="lead">{plan.intro}</p>
          <div className="actions">
            <LinkButton href="/ardu-project-summary.pdf" variant="text">
              Download as PDF
            </LinkButton>
            {giving.status === 'live' && (
              <LinkButton href={giving.url} target="_blank" rel="noopener">
                Fund a stage
              </LinkButton>
            )}
          </div>
        </header>
        <div className="section plan-body">
          {plan.sections.map((s) => (
            <section key={s.n} className="plan-section" aria-labelledby={`plan-${s.n}`}>
              <h2 id={`plan-${s.n}`}>
                <span className="plan-n">{s.n}</span>
                {s.title}
              </h2>
              {'table' in s && (
                <table className="plan-table">
                  <thead>
                    <tr>
                      <th scope="col">Stage</th>
                      <th scope="col">What it buys</th>
                      <th scope="col">Estimate</th>
                      <th scope="col">How you verify it</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.map((row) => (
                      <tr key={row[0]}>
                        <th scope="row">{row[0]}</th>
                        <td>{row[1]}</td>
                        <td className="plan-amount">{row[2]}</td>
                        <td className="plan-verify">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {s.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
          <p className="small plan-contact">
            {contact.email} · <a href={project.founderLinkedin}>the founder on LinkedIn</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
