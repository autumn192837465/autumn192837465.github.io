import type { Metadata } from 'next';
import '../styles.css';
import { PortfolioClient } from './portfolio-client';

export const metadata: Metadata = {
  title: 'Liu Chuan Feng | Unity Engineer',
  description: 'Liu Chuan Feng — Unity Engineer based in Tokyo, Japan.',
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
