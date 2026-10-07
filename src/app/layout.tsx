import type { Metadata, Viewport } from 'next';
import { manrope } from '@/styles/font';
import { project } from '@/content/project';
import { contact, integrations } from '@/data/integrations';
import '@/styles/globals.css';
const origin =
  integrations.canonicalOrigin.status === 'ready' ? integrations.canonicalOrigin.value : 'https://ardugaza.org';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: project.title,
  description: project.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: project.ogTitle,
    description: project.ogDescription,
    type: 'website',
    locale: 'en_IE',
    url: '/',
    siteName: 'Ardú',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ardú' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: project.ogTitle,
    description: project.ogDescription,
    images: ['/og-image.png'],
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#103634',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs: string[] = [project.founderLinkedin];
  if (integrations.linkedinPage.status === 'ready') sameAs.unshift(integrations.linkedinPage.value);
  return (
    <html lang="en" className={manrope.variable}>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ardú',
              url: origin,
              logo: `${origin}/brand/ardu-mark.png`,
              description: project.description,
              email: contact.email,
              sameAs,
              founder: { '@type': 'Person', name: project.founder, url: project.founderLinkedin },
            }),
          }}
        />
      </body>
    </html>
  );
}
