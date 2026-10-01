import type { Metadata, Viewport } from 'next';
import { manrope } from '@/styles/font';
import { project } from '@/content/project';
import { integrations } from '@/data/integrations';
import '@/styles/globals.css';
export const metadata: Metadata = {
  title: project.title,
  description: project.description,
  ...(integrations.canonicalOrigin.status === 'ready'
    ? {
        metadataBase: new URL(integrations.canonicalOrigin.value),
        alternates: { canonical: '/' },
      }
    : {}),
  openGraph: {
    title: project.title,
    description: project.description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: project.title,
    description: project.description,
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4f4ed',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
              description: project.description,
              founder: { '@type': 'Person', name: project.founder },
            }),
          }}
        />
      </body>
    </html>
  );
}
