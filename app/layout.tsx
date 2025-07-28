import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Rishab Ghosh - Quant | VC | Builder',
  description: 'Personal website of Rishab Ghosh - Quantitative finance, venture capital, and building cool stuff',
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
    <html lang="en">
      <body className="bg-background text-highlight">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
} 