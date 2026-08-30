import type { Metadata } from 'next';
import '../styles.css';
import { PortfolioClient } from './portfolio-client';

export const metadata: Metadata = {
  metadataBase: new URL('https://liu-chuan-feng-portfolio.limit-break-9218.chatgpt.site'),
  title: 'Liu Chuan Feng | Unity Engineer',
  description: 'Liu Chuan Feng — Unity Engineer based in Tokyo, Japan.',
  openGraph: {
    title: 'Liu Chuan Feng | Unity Engineer',
    description: 'Unity Engineer based in Tokyo, Japan. Explore selected game work and experience.',
    images: [
      {
        url: 'https://liu-chuan-feng-portfolio.limit-break-9218.chatgpt.site/og.png',
        width: 1200,
        height: 630,
        alt: 'Liu Chuan Feng — Unity Engineer · Tokyo, Japan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liu Chuan Feng | Unity Engineer',
    description: 'Unity Engineer based in Tokyo, Japan. Explore selected game work and experience.',
    images: ['https://liu-chuan-feng-portfolio.limit-break-9218.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PortfolioClient />
      </body>
    </html>
  );
}
