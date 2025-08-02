import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Rishab.',
  description: 'Personal website of Rishab Ghosh - Quantitative finance, venture capital, and building cool stuff',
  icons: {
    icon: '/images/rishab-profile.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-mesh text-text">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
} 