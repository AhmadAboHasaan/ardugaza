import { Section } from '@/components/ui/Section';
import { MediaFrame } from '@/components/content/MediaFrame';
import { LinkButton } from '@/components/ui/LinkButton';
import { integrations } from '@/data/integrations';
import { project } from '@/content/project';
export function Founder() {
  return (
    <Section className="founder" aria-labelledby="founder-title">
      <MediaFrame
        image={integrations.founderImage}
        caption="Ahmed Abuhassan · founder of Ardú"
        fallback={
          <div className="portrait-placeholder">
            <span>
              Built from
              <br />
              firsthand
              <br />
              experience.
            </span>
            <small>Approved founder portrait to follow</small>
          </div>
        }
      />
      <div>
        <h2 id="founder-title">
          From finding a socket
          <br />
          to building a system.
        </h2>
        <p className="lead">
          Ahmed Abuhassan knows what unreliable infrastructure costs a working
          day.
        </p>
        <p>
          A self-taught front-end developer from Gaza City, he learned and
          delivered professional work while finding places to charge a laptop
          and connect. Ardú turns that experience into a plan other people can
          use—and a system other people can run.
        </p>
        <p>
          His experience coordinating supporter funding informs the proposed
          trustee model. Earlier work in electrical installation and wiring also
          connects the project to engineers and technicians for the energy
          survey and installation.
        </p>
        <LinkButton href={project.linkedin} variant="text">
          Meet Ahmed on LinkedIn
        </LinkButton>
      </div>
    </Section>
  );
}
