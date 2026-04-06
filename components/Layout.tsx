'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const t = setTimeout(() => setTransitioning(false), 120);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className="min-h-screen flex pixel-grid-bg">
      <div className="flex-1 flex flex-col page-content" style={{ minWidth: 0 }}>
        <main
          style={{
            flexGrow: 1,
            opacity: transitioning ? 0 : 1,
            transition: 'opacity 0.12s steps(3)',
          }}
        >
          <div className="page-transition">
            {children}
          </div>
        </main>
        <Footer />
      </div>
      <Navbar />
    </div>
  );
}
