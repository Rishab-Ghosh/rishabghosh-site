import type { Metadata } from 'next';
import { DM_Serif_Display, Syne, Inter, Space_Grotesk, Playfair_Display_SC } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

// Artistic typography setup
const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const playfair = Playfair_Display_SC({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

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
      <body className={`bg-gradient-mesh text-text ${dmSerif.variable} ${syne.variable} ${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
} 