import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { contact, integrations } from '@/data/integrations';
import { doors } from '@/content/project';
function formLink(form: typeof integrations.interestForm, subject: string) {
  return form.status === 'ready' ? form.value : contact.mailto(subject);
}
export function Doors() {
  const giving = integrations.giving;
  const live = giving.status === 'live';
  return (
    <Section id="support" className="support" aria-labelledby="support-title">
      <div>
        <h2 id="support-title">
          Three
          <br />
          ways in.
        </h2>
        <p>
          {doors.lead[0]}
          <br />
          {doors.lead[1]}
        </p>
      </div>
      <div className="doors">
        <div className="door">
          <h3>{doors.youth.title}</h3>
          <p>{doors.youth.text}</p>
          <LinkButton href={formLink(integrations.interestForm, doors.youth.mailSubject)} variant="text">
            {doors.youth.cta}
          </LinkButton>
        </div>
        <div className="door">
          <h3>{doors.organisations.title}</h3>
          <p>{doors.organisations.text}</p>
          <LinkButton href={contact.mailto(doors.organisations.mailSubject)} variant="text">
            {doors.organisations.cta}
          </LinkButton>
        </div>
        <div className="door">
          <h3>{doors.supporters.title}</h3>
          <p>{doors.supporters.text}</p>
          {live ? (
            <LinkButton href={giving.url} target="_blank" rel="noopener">
              {doors.supporters.ctaLive}
            </LinkButton>
          ) : (
            <>
              <p>{doors.supporters.pendingText}</p>
              <LinkButton href={formLink(integrations.launchUpdateForm, 'Ardú · tell me when giving opens')}>
                {doors.supporters.ctaPending}
              </LinkButton>
            </>
          )}
          <p className="small">{doors.supporters.note}</p>
        </div>
      </div>
    </Section>
  );
}
