import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { integrations } from '@/data/integrations';
import { project } from '@/content/project';
export function Support() {
  return (
    <Section id="support" className="support" aria-labelledby="support-title">
      <div>
        <h2 id="support-title">
          The talent is here.
          <br />
          Help make
          <br />
          <em>the room.</em>
        </h2>
        <p>
          A seat. Power. A connection.
          <br />
          The conditions to begin a professional future.
        </p>
      </div>
      <div className="support-action">
        <h3>Fund the next seat</h3>
        {integrations.donation.status === 'ready' ? (
          <LinkButton href={integrations.donation.value}>
            Continue to secure giving
          </LinkButton>
        ) : (
          <>
            <p>
              Discuss funding a package or partnering with Ardú directly with
              Ahmed through his LinkedIn profile.
            </p>
            <p>
              Online giving is not available yet. The contribution route is
              being prepared.
            </p>
            <LinkButton href={project.linkedin}>
              Discuss support with Ahmed
            </LinkButton>
            <p className="small">No payment is collected on this website.</p>
          </>
        )}
        <LinkButton href="#plan" variant="text">
          Review the funding plan
        </LinkButton>
      </div>
    </Section>
  );
}
