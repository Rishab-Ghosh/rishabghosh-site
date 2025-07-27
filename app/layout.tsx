import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Rishab Ghosh - Personal Website',
  description: 'Personal website of Rishab Ghosh - Developer, Designer, and Creator',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
} 